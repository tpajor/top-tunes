import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import TopTunesMainView from './Modules/TopTunes/Components/TopTunesMainView';
import { urls } from './Routing/urls';

class App extends React.PureComponent {
  render() {
    return (
      <div className='container container--main'>
        <Router>
          <Switch>
            <Redirect exact from='/' to={urls.reactRouter.topTunes} />
            <Route path={urls.reactRouter.topTunes} component={TopTunesMainView} />
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
