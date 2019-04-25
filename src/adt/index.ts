export const Nil: Nil = 'nil';
export const identity = <T>(x: T): T => x;

export const cons = <T>(head: T, tail: List<T>): List<T> => ({ head, tail });

export const map = <T, U>(xs: List<T>, f: (x: T) => U): List<U> => {
  // TODO: write code and make the test pass
  return null as any;
};
