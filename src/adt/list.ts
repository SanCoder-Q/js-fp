export const Nil = new class Nil {
  kind: 'nil' = 'nil';
  get head(): never { throw 'Nil doesn\'t have head'; }
  get tail(): never { throw 'Nil doesn\'t have tail'; }
}();

type Nil = typeof Nil;

class NonEmptyList<T> {
  kind: 'nonEmptyList' = 'nonEmptyList';
  constructor(public head: T, public tail: List<T>){};
}

export type List<T> = Nil | NonEmptyList<T>;

export const cons = <T>(head: T, tail: List<T>): List<T> => new NonEmptyList(head, tail);

// TODO: make the tests pass for the following incomplete functions
// NOTE: DO NOT change the signatures of the functions

export const reverse = <T>(xs: List<T>): List<T> => {
  // TODO:

  return null as any;
};

export const length = <T>(xs: List<T>): number => {
  // TODO:

  return null as any;
};

export const map = <T, U>(xs: List<T>, f: (x: T) => U): List<U> => {
  // TODO:

  return null as any;
};

export const filter = <T>(xs: List<T>, p: (x: T) => boolean): List<T> => {
  // TODO:

  return null as any;
};

export const foldLeft = <T, U>(xs: List<T>, z: U, f: (acc: U, x: T) => U): U => {
  // TODO:

  return null as any;
};

export const foldRight = <T, U>(xs: List<T>, z: U, f: (x: T, acc: U) => U): U => {
  // TODO:

  return null as any;
};


// TODO: Advanced task -- implement all with only foldLeft and foldRight
// TODO: Advanced task -- implement foldLeft and foldRight tail recursively
