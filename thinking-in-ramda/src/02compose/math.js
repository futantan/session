import * as R from "ramda";

const multiply = (a, b) => a * b;
const addOne = x => x + 1;
const square = x => x * x;

// ((x * y) + 1)^2
export const operate = (x, y) => {
  return R.pipe(
    multiply,
    addOne,
    square
  )(x, y);
};
