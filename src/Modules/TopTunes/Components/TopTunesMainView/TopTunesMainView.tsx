import * as React from 'react';

import './TopTunesMainView.scss';
import TopTunesList from '../TopTunesList/TopTunesList';

class TopTunesContainer extends React.PureComponent {

  render() {
    return (
      <div className='container--page'>
        <h1 className='page-title'>
          Welcome to top 100 iTunes list
        </h1>
        <TopTunesList />
      </div>
    );
  }
}

export default TopTunesContainer;
