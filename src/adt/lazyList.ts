export const LazyNil = new class LazyNil {
  kind: 'nil' = 'nil';
  get head(): never { throw 'Nil doesn\'t have head'; }
  get tail(): never { throw 'Nil doesn\'t have tail'; }
}();

type LazyNil = typeof LazyNil;

class LazyNonEmptyList<T> {
  kind: 'nonEmptyList' = 'nonEmptyList';
  constructor(public head: T, private _tail: () => LazyList<T>){};
  get tail() { return this._tail(); }
}

export type LazyList<T> = LazyNil | LazyNonEmptyList<T>;

export const cons = <T>(head: T, tail: () => LazyList<T>): LazyList<T> => new LazyNonEmptyList(head, tail);

// TODO: make the tests pass for the following incomplete functions
// NOTE: DO NOT change the signatures of the functions

export const range = (start: number, end: number, step: number = 1): LazyList<number> => {
  return start <= end ?
    cons(start, () => range(start + step, end, step)) :
    LazyNil;
};

export const length = <T>(xs: LazyList<T>): number => {
  let acc = 0;
  let rest = xs;
  while(rest.kind !== 'nil') {
    acc = acc + 1;
    rest = rest.tail;
  }
  return acc;
};

