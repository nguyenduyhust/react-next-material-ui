import { ImageHelper } from '../image.helper';

describe('ImageHelper', () => {
  test('generateAvatarFromName', () => {
    const name = 'Test';
    const result = ImageHelper.generateAvatarFromName(name, {
      size: 20,
      backgroundColor: '#CD212A',
    });
    expect(result).toBeDefined();
    expect(result).toEqual(
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAAhElEQVQ4jWM8q6j1n4GKgImaho0aSB3Agk9SqrSAgVNFGUXsz8dPDA/Lqskz8M3SlQxMnBwMgj6eDGySEgwvZ89n+P/nL/ku/PXsOQMDAwPD7zdvGZg4ORl+3L2P1zAGhqEQKYPfQLyRAgNfz19k+Hn3HvUM/H7tBlGGMTAMhTAcgQYCAByLIN8Y+BiUAAAAAElFTkSuQmCC',
    );
  });
});
