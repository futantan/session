// view set over
import * as R from "ramda";

export const upperUserFirstName = user => {
  const firstName = R.lensPath(["name", "first"]);
  return R.over(firstName, R.toUpper)(user);
};
