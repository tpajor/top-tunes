import * as React from 'react';
import axios from 'axios';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import './TopTunesList.scss';
import TopTunesListItem from '../TopTunesListItem/TopTunesListItem';
import Quicksearch from '../../../../Shared/Components/Quicksearch';
import { resolve } from 'dns';
import { rejects } from 'assert';

interface IState {
  allIdsToShow: string[];
  allIds: string[];
  byIds: any[];
  termChange$: Subject<string>;
}

class TopTunesList extends React.PureComponent<any, IState> {
  public state: IState = {
    allIdsToShow: [],
    allIds: [],
    byIds: [],
    termChange$: new Subject<string>(),
  };

  componentDidMount() {
    axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json').then((res: any) => {
      const keys: any[] = [];
      for (const key in res.data.feed.entry) {
        keys.push(key);
      }

      this.setState({ byIds: res.data.feed.entry, allIds: keys, allIdsToShow: keys });
    });

    this.state.termChange$.pipe(
      debounceTime(500),
    ).subscribe((searchTerm: string) => {
      const searchTermLowerCase = searchTerm.toLowerCase().trim();
      this.setState((prevState: IState) => ({
        allIdsToShow: prevState.allIds.filter((id: string) => {
          return prevState.byIds[+id].title.label.toLowerCase().includes(searchTermLowerCase);
        }),
      }));
    });
  }

  private readonly mapListItems = () => {
    if (this.state.allIds.length > 0) {
      if (this.state.allIdsToShow.length > 0) {
        return this.state.allIdsToShow.map((id: any) => (
          <TopTunesListItem
            key={id}
            position={id}
            item={this.state.byIds[id]}
          />
        ));
      } else {
        return 'no entries match the query';
      }
    } else {
      return 'loading';
    }
  }

  public render() {
    return (
      <div className='container container--list'>
        <div className='container'>
          <Quicksearch
            term$={this.state.termChange$}
          />
        </div>
        {this.mapListItems()}
        <br/>
      </div>
    );
  }
}

export default TopTunesList;
