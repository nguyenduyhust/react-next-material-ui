import { RootState } from '../configure-store';

export const sIsMobile = (rootState: RootState) => rootState.appState.isMobile;

export const sUser = (rootState: RootState) => rootState.appState.profile.user;

export const sUserPreference = (rootState: RootState) => rootState.appState.profile.preference;
