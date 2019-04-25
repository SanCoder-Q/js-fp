import { cons, identity, map, Nil } from '../index';

describe('List', () => {
  describe('map', () => {
    it('should map Nil to Nil', () => {
      const f = (_: number) => _ + 1;
      expect(map(Nil, f)).toBe(Nil);
    });

    it('should map to itself on identity', () => {
      const list = cons(1, cons(2, Nil));
      expect(map(list, identity)).toEqual(list);
    });

    it('should map to original list on inverse functions', () => {
      const f = (_: number) => _ + 1;
      const g = (_: number) => _ - 1;
      const list = cons(1, cons(2, Nil));
      expect(map(map(list, f), g)).toEqual(list);
    });
  });
});
