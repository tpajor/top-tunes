import * as React from 'react';
import { LocationDescriptor } from 'history';

import TopTunesListContainer from '../Containers/TopTunesListContainer';

interface IProps {
  location: LocationDescriptor;
}
class TopTunesMainView extends React.PureComponent<IProps> {
  public render() {
    return (
      <div className='container container--page'>
        <h1 className='text text--title'>
          Welcome to top 100 iTunes list
        </h1>
        <TopTunesListContainer location={this.props.location}/>
      </div>
    );
  }
}

export default TopTunesMainView;
