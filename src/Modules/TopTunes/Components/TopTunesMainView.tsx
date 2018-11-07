import * as React from 'react';

import TopTunesListContainer from '../Containers/TopTunesListContainer';

class TopTunesMainView extends React.PureComponent {
  public render() {
    return (
      <div className='container container--page'>
        <h1 className='text text--page-title'>
          Welcome to top 100 iTunes list
        </h1>
        <TopTunesListContainer />
      </div>
    );
  }
}

export default TopTunesMainView;
