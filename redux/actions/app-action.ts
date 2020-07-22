import { createTypeAction } from 'type-redux';

import * as Utils from '../../utilities/system-utils';

export const detectMobile = createTypeAction('DETECT_MOBILE', (userAgent: string) => {
  return Utils.detectMobile(userAgent);
});