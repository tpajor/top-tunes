import * as React from 'react';

import './TopTunesMainView.scss';
import TopTunesList from '../TopTunesList/TopTunesList';

class TopTunesContainer extends React.PureComponent {

  render() {
    return (
      <div className='container'>
        <h1>
          Welcome to Top Tunes App
        </h1>
        <TopTunesList
          
        />
      </div>
    );
  }
}

export default TopTunesContainer;
