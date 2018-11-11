import * as topTunesReducer from './topTunesReducer';
import { topTunesActionTypes } from './topTunesActions';
import { iTunes } from '../../../Shared/Interfaces/__mocks__/ITuneMocks';

describe('topTunesReducer reducer', () => {
  it('should return initial state if no valid actions was provided', () => {
    const expectedDataState = JSON.parse(JSON.stringify(topTunesReducer.initialDataState));
    const expectedUIState = JSON.parse(JSON.stringify(topTunesReducer.initialUIState));

    expect(topTunesReducer.dataReducer(undefined, {})).toEqual(expectedDataState);
    expect(topTunesReducer.uiReducer(undefined, {})).toEqual(expectedUIState);
  });

  it('should handle GET_ITUNES_START', () => {
    const initialDataState = JSON.parse(JSON.stringify(topTunesReducer.initialDataState));
    const initialUIState = JSON.parse(JSON.stringify(topTunesReducer.initialUIState));

    const expectedDataState = JSON.parse(JSON.stringify(topTunesReducer.initialDataState));
    const expectedUIState = JSON.parse(JSON.stringify(topTunesReducer.initialUIState));

    expectedUIState.isLoading = true;

    expect(topTunesReducer.dataReducer(initialDataState, { type: topTunesActionTypes.GET_ITUNES_START }))
      .toEqual(expectedDataState);

    expect(topTunesReducer.uiReducer(initialUIState, { type: topTunesActionTypes.GET_ITUNES_START }))
      .toEqual(expectedUIState);
  });

  it('should handle GET_ITUNES_ERROR', () => {
    const error = 'error';

    const initialDataState = JSON.parse(JSON.stringify(topTunesReducer.initialDataState));
    const initialUIState = JSON.parse(JSON.stringify(topTunesReducer.initialUIState));

    initialUIState.isLoading = true;

    const expectedDataState = JSON.parse(JSON.stringify(topTunesReducer.initialDataState));
    const expectedUIState = JSON.parse(JSON.stringify(topTunesReducer.initialUIState));

    expectedUIState.error = error;

    expect(topTunesReducer.dataReducer(
      initialDataState,
      { type: topTunesActionTypes.GET_ITUNES_ERROR, payload: error },
    )).toEqual(expectedDataState);

    expect(topTunesReducer.uiReducer(
      initialUIState,
      { type: topTunesActionTypes.GET_ITUNES_ERROR, payload: error },
    )).toEqual(expectedUIState);
  });

  it('should handle GET_ITUNES_SUCCESS', () => {
    const expectediTunes = {
      0: iTunes[0],
      1: iTunes[1],
      2: iTunes[2],
    };
    const expectedIds = [ 0, 1, 2 ];

    const initialDataState = JSON.parse(JSON.stringify(topTunesReducer.initialDataState));
    const initialUIState = JSON.parse(JSON.stringify(topTunesReducer.initialUIState));

    initialUIState.isLoading = true;
    initialUIState.error = 'error';

    const expectedDataState = JSON.parse(JSON.stringify(topTunesReducer.initialDataState));
    const expectedUIState = JSON.parse(JSON.stringify(topTunesReducer.initialUIState));

    expectedDataState.allIds = expectedIds;
    expectedDataState.byIds = expectediTunes;
    expectedDataState.filteredIds = expectedIds;

    expect(topTunesReducer.dataReducer(
      initialDataState,
      { type: topTunesActionTypes.GET_ITUNES_SUCCESS, payload: iTunes.slice(0, 3) },
    )).toEqual(expectedDataState);

    expect(topTunesReducer.uiReducer(
      initialUIState,
      { type: topTunesActionTypes.GET_ITUNES_SUCCESS, payload: iTunes.slice(0, 3) },
    )).toEqual(expectedUIState);
  });

  it('should handle FILTER_ITUNES', () => {
    const term = 'Some Album';

    const initialDataState = JSON.parse(JSON.stringify(topTunesReducer.initialDataState));
    const initialUIState = JSON.parse(JSON.stringify(topTunesReducer.initialUIState));

    initialDataState.allIds = [ 0, 1, 2 ];
    initialDataState.byIds = {
      0: iTunes[0],
      1: iTunes[1],
      2: iTunes[2],
    };

    const expectedDataState = JSON.parse(JSON.stringify(topTunesReducer.initialDataState));
    const expectedUIState = JSON.parse(JSON.stringify(topTunesReducer.initialUIState));

    expectedDataState.allIds = [ 0, 1, 2 ];
    expectedDataState.byIds = {
      0: iTunes[0],
      1: iTunes[1],
      2: iTunes[2],
    };
    expectedDataState.filteredIds = [ 0 ];

    expect(topTunesReducer.dataReducer(
      initialDataState,
      { type: topTunesActionTypes.FILTER_ITUNES, payload: term.toLowerCase().trim() },
    )).toEqual(expectedDataState);

    expect(topTunesReducer.uiReducer(
      initialUIState,
      { type: topTunesActionTypes.FILTER_ITUNES, payload: term.toLowerCase().trim() },
    )).toEqual(expectedUIState);
  });
});
