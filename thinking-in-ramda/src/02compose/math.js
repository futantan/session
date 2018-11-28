import * as R from "ramda";

const square = x => x * x;

// ((x * y) + 1)^2
export const operate = R.compose(
  square,
  R.inc,
  R.multiply
);
