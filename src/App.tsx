import * as React from 'react';

import TopTunesContainer from './Modules/TopTunes/Components/TopTunesMainView/TopTunesMainView';

class App extends React.PureComponent {
  render() {
    return (
      <div className='container container--main'>
        <TopTunesContainer/>
      </div>
    );
  }
}

export default App;
