import SystemHelper from '../system.helper';

describe('SystemHelper', () => {
  test('detectMobile', () => {
    const macbookChromeAgent =
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36';
    const iphoneChromeAgent =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"';
    let isMobile = SystemHelper.detectMobile(macbookChromeAgent);
    expect(isMobile).not.toBeTruthy();
    isMobile = SystemHelper.detectMobile(iphoneChromeAgent);
    expect(isMobile).toBeTruthy();
  });
});
