import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { typePendingReducerSet, createTypeReduxInitialState, typeReduxMiddleware } from 'type-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import * as AppReducer from './app-reducer';

export const rootReducer = combineReducers({
  ...typePendingReducerSet,
  appState: AppReducer.reducer,
});

export interface Store {
  appState: AppReducer.State;
}

export const InitialState: Store = Object.assign(createTypeReduxInitialState(), {
  appState: AppReducer.initialState,
});

const middlewares: any[] = [typeReduxMiddleware, promiseMiddleware];

export const configureStore = (initialState?: Store) => {
  return createStore(rootReducer, { ...InitialState, ...initialState }, composeWithDevTools(applyMiddleware(...middlewares)));
};
