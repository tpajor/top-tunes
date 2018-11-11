import * as topTunesActions from './topTunesActions';
import { iTunes } from '../../../Shared/Interfaces/__mocks__/ITuneMocks';

function setup() {

}

describe('topTunesActions functions', () => {
  it('should check if getiTunesStart action returns proper object', () => {
    const expectedAction = {
      type: topTunesActions.topTunesActionTypes.GET_ITUNES_START,
    };

    expect(topTunesActions.getiTunesStart()).toEqual(expectedAction);
  });

  it('should check if getiTunesSuccess action returns proper object', () => {
    const expectedAction = {
      type: topTunesActions.topTunesActionTypes.GET_ITUNES_SUCCESS,
      payload: iTunes,
    };

    expect(topTunesActions.getiTunesSuccess(iTunes)).toEqual(expectedAction);
  });

  it('should check if getiTunesSuccess action returns proper object', () => {
    const error = 'error';
    const expectedAction = {
      type: topTunesActions.topTunesActionTypes.GET_ITUNES_ERROR,
      payload: error,
    };

    expect(topTunesActions.getiTunesError(error)).toEqual(expectedAction);
  });

  it('should check if filteriTunes action returns proper object', () => {
    const term = 'test';
    const expectedAction = {
      type: topTunesActions.topTunesActionTypes.FILTER_ITUNES,
      payload: term,
    };

    expect(topTunesActions.filteriTunes(term)).toEqual(expectedAction);
  });
});
