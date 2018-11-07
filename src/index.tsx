import * as React from 'react';
// tslint:disable-next-line:import-name
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { rootReducer } from './Store/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createSagas } from './Store/createSagas';

const rootEl = document.getElementById('root');

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

createSagas(sagaMiddleware);

const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    rootEl
  );
};

render(App);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default;

    render(NewApp);
  });
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
