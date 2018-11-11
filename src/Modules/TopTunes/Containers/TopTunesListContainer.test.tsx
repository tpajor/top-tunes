import * as React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import TopTunesListContainer from './TopTunesListContainer';
import { IRootState } from '../../../Store/rootReducer';
import { initialUIState, initialDataState } from '../Store/topTunesReducer';
import TopTunesList from '../Components/TopTunesList';
import { getiTunesStart, filteriTunes } from '../Store/topTunesActions';

const mockStore = configureMockStore();

function setup() {
  const state: IRootState = {
    topTunes: {
      ui: initialUIState,
      data: initialDataState,
    },
  };

  const store = mockStore(state);

  const props = {
    store,
    location: 'mock',
  };

  const wrapper = shallow(<TopTunesListContainer {...props} />);

  return {
    wrapper,
    props,
    state,
  };
}

describe('TopTunesListContainer component', () => {
  it('should map store state and dispatch expreasions to props', () => {
    const { wrapper, state } = setup();
    const child = wrapper.find(TopTunesList);

    expect(child.prop('filteredIds')).toEqual(state.topTunes.data.filteredIds);
    expect(child.prop('byIds')).toEqual(state.topTunes.data.byIds);
    expect(child.prop('isLoading')).toEqual(state.topTunes.ui.isLoading);
    expect(child.prop('error')).toEqual(state.topTunes.ui.error);

    expect(child.prop('getiTunesStart')()).toEqual(getiTunesStart());

    const term = 'term';
    expect(child.prop('filteriTunes')(term)).toEqual(filteriTunes(term));
  });
});
