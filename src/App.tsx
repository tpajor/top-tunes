import * as React from 'react';

import TopTunesMainView from './Modules/TopTunes/Components/TopTunesMainView/TopTunesMainView';

class App extends React.PureComponent {
  render() {
    return (
      <div className='container container--main'>
        <TopTunesMainView/>
      </div>
    );
  }
}

export default App;
