import * as React from 'react';
import axios from 'axios';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import './TopTunesList.scss';
import TopTunesListItem from '../TopTunesListItem/TopTunesListItem';
import Quicksearch from '../../../../Shared/Components/Quicksearch';

interface IState {
  allIdsToShow: string[],
  allIds: string[];
  byIds: any[];
  termChange$: Subject<string>,
};

class TopTunesList extends React.PureComponent<any, IState> {
  state = {
    allIdsToShow: ([] as string[]),
    allIds: ([] as string[]),
    byIds: ([] as any[]),
    termChange$: new Subject<string>(),
  };
  

  componentDidMount() {
    axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json').then((res: any) => {
      const keys: any[] = [];
      for (let key in res.data.feed.entry) {
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

  render() {
    return (
      <div className="container container--list">
        <div className="container container-page--quicksearch">
          <Quicksearch 
            term$={this.state.termChange$}
          />
        </div>
        {this.state.allIdsToShow.length > 0 ? this.state.allIdsToShow.map((id: any) => 
          <TopTunesListItem key={id}
            position={id}
            item={this.state.byIds[id]}
          />
        ) : 'loading'}
        <br/>
      </div>
    );
  }
}

export default TopTunesList;
