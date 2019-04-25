type Nil = 'nil';

interface NonEmptyList<T> {
  head: T;
  tail: List<T>;
}

type List<T> = Nil | NonEmptyList<T>;

