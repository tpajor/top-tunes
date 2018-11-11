import { combineReducers, Reducer, AnyAction } from 'redux';

import IITune from '../../../Shared/Interfaces/models/IITune';
import { topTunesActionTypes } from './topTunesActions';

export interface ITopTunesDataState {
  allIds: number[];
  filteredIds: number[];
  byIds: { [key: string]: IITune };
}

export interface ITopTunesUIState {
  isLoading: boolean;
  error: string;
}

export const initialDataState: ITopTunesDataState = {
  allIds: [],
  filteredIds: [],
  byIds: {},
};

export const initialUIState: ITopTunesUIState = {
  isLoading: false,
  error: '',
};

export function dataReducer(state = initialDataState, action: any): ITopTunesDataState {
  switch (action.type) {
    case topTunesActionTypes.GET_ITUNES_SUCCESS: {
      const keys: number[] = [];
      const data: { [key: string]: IITune } = {};

      for (const key in action.payload) {
        keys.push(+key);
        data[key] = action.payload[key];
      }

      return { ...state, byIds: data, allIds: keys, filteredIds: keys };
    }

    case topTunesActionTypes.FILTER_ITUNES: {
      return {
        ...state,
        filteredIds: state.allIds.filter((id: number) => {
          return state.byIds[id].title.toLowerCase().includes(action.payload);
        }),
      };
    }

    default:
      return state;
  }
}

export function uiReducer(state = initialUIState, action: any): ITopTunesUIState {
  switch (action.type) {
    case topTunesActionTypes.GET_ITUNES_START: {
      return { ...state, isLoading: true };
    }

    case topTunesActionTypes.GET_ITUNES_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }

    case topTunesActionTypes.GET_ITUNES_SUCCESS: {
      return { ...state, isLoading: false, error: '' };
    }

    default:
      return state;
  }
}

export interface ITopTunesState {
  ui: ITopTunesUIState;
  data: ITopTunesDataState;
}

export const topTunesReducer: Reducer<{ ui: ITopTunesUIState; data: ITopTunesDataState; }, AnyAction>
  = combineReducers({ ui: uiReducer, data: dataReducer });
