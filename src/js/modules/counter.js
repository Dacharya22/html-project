export function createCounter(start = 0) {
  let n = start;
  return {
    inc: () => ++n,
    dec: () => --n,
    value: () => n,
  };
}
