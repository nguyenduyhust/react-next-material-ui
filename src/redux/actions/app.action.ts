import { createTypeAction } from '../type-redux';
import SystemHelper from '@helpers/system.helper';

export const detectMobile = createTypeAction<string, boolean>(
  'DETECT_MOBILE',
  (userAgent: string) => {
    return SystemHelper.detectMobile(userAgent);
  },
);
