import * as React from 'react';

import TopTunesList from '../TopTunesList/TopTunesList';

class TopTunesContainer extends React.PureComponent {

  render() {
    return (
      <div className='container container--page'>
        <h1 className='text page-title'>
          Welcome to top 100 iTunes list
        </h1>
        <TopTunesList />
      </div>
    );
  }
}

export default TopTunesContainer;
