# Algebraic data type

> an algebraic data type is a kind of composite type, i.e., a type formed by combining other types.

[Ref: wikipedia](https://en.wikipedia.org/wiki/Algebraic_data_type)

## Product type: ordered compounded type

A product type is always associate with logical conjunction.

```typescript
interface ProductExample1 {
    lable1: string;
    lable2: number;
}

type ProductExample2 = [ string, number ];
```

## Sum type: disjoint union type

A sum type is always associate with logical disjunction.

```typescript
enum SumExample1 {
    variant1,
    variant2
}

type SumExample2 = 'variant1' | 'variant2'

interface Variant1 {
  kind: 'variant1';
}

interface Variant2 {
  kind: 'variant2';
}
type SumExample3 = Variant1 | Variant2;
```

## Examples

```typescript
type Nil = 'nil';
type List<T> = Nil | [T, List<T>]
const Nil: Nil = 'nil';

const isNil = <T>(list: List<T>): list is Nil => list === Nil;

const head = <T>(list: List<T>): T | null => isNil(list) ? null : list[0];

const tail = <T>(list: List<T>): List<T> => isNil(list) ? Nil : list[1];

const map = <T, U>(list: List<T>, f: (t: T) => U): List<U> =>
  isNil(list) ? Nil : [ f(head(list)), map(tail(list), f) ];

```



## Pattern match



