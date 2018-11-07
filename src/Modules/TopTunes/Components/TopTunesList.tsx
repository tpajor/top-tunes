import * as React from 'react';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import './TopTunesList.scss';
import TopTunesListItem from './TopTunesListItem';
import Quicksearch from '../../../Shared/Components/Quicksearch';
import Spinner from '../../../Shared/Components/Spinner';
import IITune from '../../../Shared/Interfaces/models/IITune';

interface IState {
  termChange$: Subject<string>;
}

interface IProps {
  filteredIds: number[];
  byIds: { [key: string]: IITune };
  isLoading: boolean;
  error: string;
  getiTunesStart: () => void;
  filteriTunes: (term: string) => void;
}

class TopTunesList extends React.PureComponent<IProps, IState> {
  public state: IState = {
    termChange$: new Subject<string>(),
  };

  componentDidMount() {
    this.props.getiTunesStart();

    this.state.termChange$.pipe(
      debounceTime(500),
    ).subscribe((searchTerm: string) => {
      this.props.filteriTunes(searchTerm.toLowerCase().trim());
    });
  }

  private readonly mapListItems = () => {
    if (!this.props.isLoading) {
      if (this.props.error === '') {
        if (this.props.filteredIds.length > 0) {
          return this.props.filteredIds.map((id: any) => (
            <TopTunesListItem
              key={id}
              position={id}
              item={this.props.byIds[id]}
            />
          ));
        } else {
          return (
            <div className='container container--list-info'>
              <div className='container container--icon' />
              <h4 className='text text--list-info'>
                No results found
              </h4>
            </div>
          );
        }
      } else {
        return (
          <div className='container container--list-info'>
            <h4 className='text text--list-error'>
              {`${this.props.error}`}<br />
              Please try again later
            </h4>
          </div>
        );
      }
    } else {
      return <Spinner text='LOADING' />;
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
