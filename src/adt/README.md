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
class Base {}
class Variant1 extends Base {}
class Variant2 extends Base {}

type SumExample = Base;

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

## Pattern match





