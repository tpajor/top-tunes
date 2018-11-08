import * as React from 'react';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Route } from 'react-router-dom';
import { LocationDescriptor } from 'history';

import TopTunesListItem from './TopTunesListItem';
import Quicksearch from '../../../Shared/Components/Quicksearch';
import Spinner from '../../../Shared/Components/Spinner';
import IITune from '../../../Shared/Interfaces/models/IITune';
import { urls } from '../../../Routing/urls';
import TuneDetailModalContainer from '../Containers/TuneDetailModalContainer';
import NoResults from '../../../Shared/Components/NoResults';
import Error from '../../../Shared/Components/Error';

interface IState {
  termChange$: Subject<string>;
}

interface IProps {
  filteredIds: number[];
  byIds: { [key: string]: IITune };
  isLoading: boolean;
  error: string;
  location: LocationDescriptor;
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
          return this.props.filteredIds.map((id: any, i: number) => (
            <TopTunesListItem
              iteration={i}
              key={id}
              position={id}
              item={this.props.byIds[id]}
            />
          ));
        } else {
          return (
            <div className='container container--list-info'>
              <NoResults />
            </div>
          );
        }
      } else {
        return (
          <div className='container container--list-info'>
            <Error error={this.props.error}/>
          </div>
        );
      }
    } else {
      return <Spinner text='LOADING' />;
    }
  }
  renderTuneDetailRoute = () => {
    if (this.props.isLoading || this.props.error !== '' || this.props.filteredIds.length === 0) {
      return null;
    } else {
      return <Route path={urls.reactRouter.topTunesDetail} component={TuneDetailModalContainer} />;
    }
  }

  public render() {
    return (
      <div className='container container--list'>
      {this.renderTuneDetailRoute()}
        <div className='container'>
          <Quicksearch
            term$={this.state.termChange$}
          />
        </div>
        {this.mapListItems()}
      </div>
    );
  }
}

export default TopTunesList;
