import { put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import TopTunesService from '../Services/TopTunesService';
import { topTunesActionTypes, getiTunesSuccess, getiTunesError } from './topTunesActions';
import IITune from '../../../Shared/Interfaces/models/IITune';

function* getiTunes(topTunesService: TopTunesService): SagaIterator {
  try {
    const iTunes: IITune[] = yield call(() => topTunesService.getTopiTunes());
    yield put(getiTunesSuccess(iTunes));
  } catch (err) {
    yield put(getiTunesError(err.response.statusText));
  }
}

export function* topTunesSaga(topTunesService: TopTunesService): SagaIterator {
  yield takeEvery(topTunesActionTypes.GET_ITUNES_START, () => getiTunes(topTunesService) as SagaIterator);
}
