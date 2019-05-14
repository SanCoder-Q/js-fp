import { cons, filter, foldLeft, foldRight, length, List, map, Nil, reverse } from '../list';
import { identity, Y } from '../..';

describe('List', () => {

  const mkList = (size: number): List<number> =>
    Y((go: Function) =>
      (acc: List<number>, count: number) =>
        count < size ? go(cons(size - count, acc), count + 1) : acc
    )(Nil, 0);

  describe('length', () => {
    it('should be zero for Nil', () => {
      expect(length(Nil)).toBe(0);
    });

    it('should be three for three element cons together', () => {
      expect(length(mkList(3))).toBe(3);
    });
  });

  describe('reverse', () => {
    it('should not change the length', () => {
      expect(length(reverse(mkList(3)))).toBe(length(mkList(3)));
    });

    it('should move the last one to the first', () => {
      expect(reverse(mkList(3)).head).toBe(3);
    });
  });

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
      expect(map(map(mkList(20), f), g)).toEqual(mkList(20));
    });
  });

  describe('filter', () => {
    it('should return nil given a nil', () => {
      expect(filter(Nil, _ => true)).toEqual(Nil);
    });

    it('should return nil when prediction always falsy', () => {
      expect(filter(mkList(20), _ => false)).toEqual(Nil);
    });

    it('should return itself when prediction always truthy', () => {
      expect(filter(mkList(20), _ => true)).toEqual(mkList(20));
    });
  });

  describe('foldLeft', () => {
    it('should return z when fold on a nil', () => {
      expect(foldLeft(Nil, 0, (acc: number, x: number) => acc + x)).toEqual(0);
    });

    it('should change nothing when drop the element', () => {
      expect(foldLeft(mkList(20), Nil, identity)).toEqual(Nil);
    });

    it('should get the last element when drop the acc', () => {
      expect(foldLeft(mkList(20), 0, (_, x: number) => x)).toEqual(20);
    });

    it('should sum up the list when doing aggregation', () => {
      expect(foldLeft(mkList(20), 0, (acc: number, x: number) => acc + x)).toEqual(210);
    });
  });

  describe('foldRight', () => {
    it('should return z when fold on a nil', () => {
      expect(foldRight(Nil, 0, (x: number, acc: number) => acc + x)).toEqual(0);
    });

    it('should change nothing when drop the element', () => {
      expect(foldRight(mkList(20), Nil, (_, x) => x)).toEqual(Nil);
    });

    it('should get the last element when drop the acc', () => {
      expect(foldRight(mkList(20), 0, identity)).toEqual(1);
    });

    it('should sum up the list when doing aggregation', () => {
      expect(foldRight(mkList(20), 0, (x: number, acc: number) => acc + x)).toEqual(210);
    });
  });
});
