import firebase from 'firebase';
import { createTypeAction, createTypeAsyncAction } from '../type-redux';
import { User } from '~/types/store';
import { Store } from '~/redux/configure-store';
import * as SystemUtils from '~/utils/system.util';

export const detectMobile = createTypeAction<string, boolean>(
  'DETECT_MOBILE',
  (userAgent: string) => {
    return SystemUtils.detectMobile(userAgent);
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
