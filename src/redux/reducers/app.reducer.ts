import { createTypeReducer } from '../type-redux';
import * as AppActions from '../actions/app.action';
import { Profile } from '~/types/store';

export type State = {
  isMobile: boolean;
  profile: Profile;
};

export const initialState: State = {
  isMobile: false,
  profile: {
    preference: {
      language: 'en',
    },
  },
};

export const detectMobileReducer = AppActions.detectMobile.reducer<State>((state, action) => ({
  isMobile: action.payload,
}));

export const setUserReducer = AppActions.setUser.reducer<State>((state, action) => ({
  profile: {
    ...state.profile,
    user: action.payload,
  },
}));

export const setUserPreferenceReducer = AppActions.setUserPreference.reducer<State>(
  (state, action) => ({
    profile: {
      ...state.profile,
      preference: action.payload,
    },
  }),
);

export const reducer = createTypeReducer(
  initialState,
  detectMobileReducer,
  setUserReducer,
  setUserPreferenceReducer,
);
