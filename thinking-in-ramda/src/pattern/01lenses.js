// view set over
import * as R from "ramda";

export const upperUserFirstName = R.over(
  R.lensPath(["name", "first"]),
  R.toUpper
);
