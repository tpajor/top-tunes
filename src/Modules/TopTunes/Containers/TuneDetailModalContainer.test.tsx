import * as React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { History } from 'history';
import { match } from 'react-router';

import { IRootState } from '../../../Store/rootReducer';
import { initialUIState, initialDataState } from '../Store/topTunesReducer';
import TuneDetailModalContainer from './TuneDetailModalContainer';
import { iTunes } from '../../../Shared/Interfaces/__mocks__/ITuneMocks';
import TuneDetailModalLoadble from '../Lazy/TuneDetailModalLoadble';

const mockStore = configureMockStore();

function setup() {
  const state: IRootState = {
    topTunes: {
      ui: initialUIState,
      data: initialDataState,
    },
  };

  state.topTunes.data.byIds = {
    0: iTunes[0],
    1: iTunes[1],
    2: iTunes[2],
  };

  const store = mockStore(state);

  const props = {
    store,
    history: {} as unknown as History,
    match: {
      params: {
        id: 1,
      },
    } as unknown as match,
  };

  const wrapper = shallow(<TuneDetailModalContainer {...props} />);

  return {
    wrapper,
    props,
    state,
  };
}

describe('TuneDetailModalContainer component', () => {
  it('should map store state', () => {
    const { wrapper } = setup();
    const child = wrapper.find(TuneDetailModalLoadble);

    expect(child.prop('tune')).toEqual(iTunes[1]);
  });
});
