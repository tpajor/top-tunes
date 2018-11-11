
import { createStore } from 'redux';

import { initialUIState, initialDataState } from '../Modules/TopTunes/Store/topTunesReducer';
import { IRootState, rootReducer } from './rootReducer';

function setup() {
  const store = createStore(rootReducer);

  return {
    store,
  };
}

describe('rootReducer reducer', () => {
  it('should combine reducers', () => {
    const { store } = setup();

    expect((store.getState() as IRootState).topTunes.ui).toEqual(initialUIState);
    expect((store.getState() as IRootState).topTunes.data).toEqual(initialDataState);
  });
});
