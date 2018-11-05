import React from 'react';
import { render } from 'react-dom';
import {AppContainer} from "react-hot-loader";

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById("root");

render(
  <AppContainer>
    <App/>
  </AppContainer>,
  rootEl
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept("./App", () => {
    const NewApp = require("./App").default;

    render(
      <AppContainer>
          <NewApp/>
      </AppContainer>,
      rootEl
    );
  });
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
