import * as R from "ramda";

const square = x => x * x;

// ((x * y) + 1)^2
export const operate = R.pipe(
  R.multiply,
  R.inc,
  square
);
