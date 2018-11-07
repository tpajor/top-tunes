import { SagaMiddleware } from 'redux-saga';
import { topTunesSaga } from '../Modules/TopTunes/Store/topTunesSagas';
import TopTunesService from '../Modules/TopTunes/Services/TopTunesService';

export function createSagas(sagaMiddlewere: SagaMiddleware<{}>) {
  const topTunesService = new TopTunesService();

  const sagas = [
    () => topTunesSaga(topTunesService),
  ];

  sagas.forEach((saga) => {
    sagaMiddlewere.run(saga);
  });

}
