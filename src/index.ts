// These are the helper functions you can use in everywhere

export const identity = <T>(x: T): T => x;

export const Y = (F: Function) => {
  const W = (x: Function) => (f => F(f))(
    (...args: any) => x(x)(...args));
  return W(W);
};
