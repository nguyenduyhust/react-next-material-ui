import * as FileConverterUtils from '../file-converter.util';

describe('FileConverterHelper', () => {
  test('fileToBase64', async () => {
    const file = new File(['foo'], 'foo.txt', { type: 'text/plain' });
    const result = await FileConverterUtils.fileToBase64(file);
    expect(result).toBeDefined();
    expect(result).toEqual('data:text/plain;base64,Zm9v');
  });
});
