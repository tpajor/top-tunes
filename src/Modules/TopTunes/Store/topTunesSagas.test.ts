import { expectSaga } from 'redux-saga-test-plan';

import { topTunesSaga } from './topTunesSagas';
import { rootReducer } from '../../../Store/rootReducer';
import { getiTunesStart, getiTunesSuccess, getiTunesError } from './topTunesActions';
import TopTunesService from '../Services/TopTunesService';
import { iTunes } from '../../../Shared/Interfaces/__mocks__/ITuneMocks';

describe('topTunesSagas saga', () => {
  it('should should dispatch actions and call api on getiTunesStart action', async () => {
    spyOn(TopTunesService.prototype, 'getTopiTunes').and.callFake(() => iTunes);
    const service = new TopTunesService();

    await expectSaga(() => topTunesSaga(service))
      .withReducer(rootReducer)
      .dispatch(getiTunesStart())
      .put(getiTunesSuccess(iTunes))
      .silentRun();
  });

  it('should should dispatch actions and call api on getiTunesStart action', async () => {
    const err = {
      response: {
        statusText: 'error',
      },
    };

    spyOn(TopTunesService.prototype, 'getTopiTunes').and.callFake(() => {
      throw err;
    });
    const service = new TopTunesService();

    await expectSaga(() => topTunesSaga(service))
      .withReducer(rootReducer)
      .dispatch(getiTunesStart())
      .put(getiTunesError(err.response!.statusText))
      .silentRun();
  });
});
