import * as React from 'react';

import TopTunesList from '../TopTunesList/TopTunesList';

class TopTunesMainView extends React.PureComponent {

  render() {
    return (
      <div className='container container--page'>
        <h1 className='text text--page-title'>
          Welcome to top 100 iTunes list
        </h1>
        <TopTunesList />
      </div>
    );
  }
}

export default TopTunesMainView;
