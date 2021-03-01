import firebase from 'firebase';
import { createTypeAction, createTypeAsyncAction } from '../type-redux';
import SystemHelper from '@helpers/system.helper';
import { User } from '@type/store';
import { Store } from '@redux/configure-store';

export const detectMobile = createTypeAction<string, boolean>(
  'DETECT_MOBILE',
  (userAgent: string) => {
    return SystemHelper.detectMobile(userAgent);
  },
);

export const setUser = createTypeAction<User, User | undefined>('SET_USER', (user?: User) => {
  return user;
});

export const setUserPreference = createTypeAction<{ language: string }>(
  'SET_PREFERENCE',
  (preference) => {
    return preference;
  },
);
