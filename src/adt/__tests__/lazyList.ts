import { length, range } from '../lazyList';

describe('lazyList', () => {
  describe('Range', () => {
    it('should be a lazy list', () => {
      expect(() => range(0, 1000000)).not.toThrow();
      expect(() => length(range(0, 100000))).toThrow();
    });
  });
});
