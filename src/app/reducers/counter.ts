import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

export const increase = createAction('[COUNTER] increase');
export const decrease = createAction('[COUNTER] decrease');
export const clear = createAction('[COUNTER] clear');

export interface ICounterState {
  count: number;
}

export const initialState: ICounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increase, (state) => ({ ...state, count: state.count + 1 })),
  on(decrease, (state) => ({ ...state, count: state.count - 1 })),
  on(clear, (state) => ({ ...state, count: 0 }))
);

export const featureSelector = createFeatureSelector<ICounterState>('counter');
export const countSelector = createSelector(featureSelector, (state) => state.count);
