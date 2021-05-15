import { ActionReducer, ActionReducerMap, MetaReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import { ICounterState, counterReducer } from './counter';

import { environment } from '../../environments/environment';

export interface State {
  counter: ICounterState;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
