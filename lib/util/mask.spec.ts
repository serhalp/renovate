import { maskToken } from './mask';

describe('util/mask', () => {
  describe('.maskToken', () => {
    it('returns value if passed value is falsy', () => {
      expect(maskToken('')).toBe('');
    });

    it('hides value content', () => {
      expect(maskToken('123456789')).toBe('12*****89');
    });
  });
});
