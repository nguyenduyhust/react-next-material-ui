import { RootState } from '../configure-store';

export const sIsMobile = (rootState: RootState) => rootState.appState.isMobile;
