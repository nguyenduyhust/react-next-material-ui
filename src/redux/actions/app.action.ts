import { createTypeAction } from '../type-redux';
import { User } from '~/types/store';
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
