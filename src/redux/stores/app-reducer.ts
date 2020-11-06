import { createTypeReducer } from '../type-redux';
import * as AppActions from '../actions/app-action';

export type State = {
  isMobile: boolean;
};

export const initialState: State = {
  isMobile: false,
};

export const detectMobileReducer = AppActions.detectMobile.reducer<State>((state, action) => ({
  isMobile: action.payload,
}));

export const reducer = createTypeReducer(initialState, detectMobileReducer);
