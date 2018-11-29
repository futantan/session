// we have a value
// we want to apply a sequence of operations on it
// [].map(xx).map(xx)
// P.then(xx).then(xx)

// https://egghead.io/courses/professor-frisby-introduces-composable-functional-javascript
import * as R from "ramda";

const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
});

const nextCharForNumberString = str =>
  Box(str)
    .map(s => s.trim())
    .map(r => parseInt(r))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))
    .map(c => c.toLowerCase());

const result = nextCharForNumberString("  64 ");

const map = (f, F) => F.map(f);

const nextCharForNumberString2 = str => {
  const transform = R.compose(
    c => c.toLowerCase(),
    i => String.fromCharCode(i),
    i => i + 1,
    r => parseInt(r),
    s => s.trim()
  );
  return map(transform, Box(str));
};

const result2 = nextCharForNumberString2("  64 ");

console.log(result.inspect());
console.log(result2.inspect());
