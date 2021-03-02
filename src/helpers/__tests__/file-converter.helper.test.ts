import { FileConverterHelper } from '../file-converter.helper';

describe('FileConverterHelper', () => {
  test('fileToBase64', async () => {
    const file = new File(['foo'], 'foo.txt', { type: 'text/plain' });
    const result = await FileConverterHelper.fileToBase64(file);
    expect(result).toBeDefined();
    expect(result).toEqual('data:text/plain;base64,Zm9v');
  });
});
