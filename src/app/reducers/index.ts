import { ActionReducer, ActionReducerMap, MetaReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import { COUNTER_KEY, ICounterState, counterReducer } from './counter';

import { environment } from '../../environments/environment';

export interface State {
  [COUNTER_KEY]: ICounterState;
}

export const reducers: ActionReducerMap<State> = {
  [COUNTER_KEY]: counterReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
