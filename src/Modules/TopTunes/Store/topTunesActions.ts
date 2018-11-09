import IITune from '../../../Shared/Interfaces/models/IITune';

export enum topTunesActionTypes {
  GET_ITUNES_START = 'Get iTunes: Start',
  GET_ITUNES_SUCCESS = 'Get iTunes: Success',
  GET_ITUNES_ERROR = 'Get iTunes: Error',
  FILTER_ITUNES = 'Filter iTunes',
}

export function getiTunesStart() {
  return { type: topTunesActionTypes.GET_ITUNES_START };
}

export function getiTunesSuccess(iTunes: IITune[]) {
  return { type: topTunesActionTypes.GET_ITUNES_SUCCESS, payload: iTunes };
}

export function getiTunesError(error: string) {
  return { type: topTunesActionTypes.GET_ITUNES_ERROR, payload: error };
}

export function filteriTunes(term: string) {
  return { type: topTunesActionTypes.FILTER_ITUNES, payload: term };
}
