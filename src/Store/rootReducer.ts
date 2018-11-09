import { combineReducers, Reducer } from 'redux';

import { topTunesReducer, ITopTunesState } from '../Modules/TopTunes/Store/topTunesReducer';

export interface IRootState {
  topTunes: ITopTunesState;
}

export const rootReducer: Reducer = combineReducers({
  topTunes: topTunesReducer,
});
