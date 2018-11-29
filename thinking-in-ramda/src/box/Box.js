// we have a value
// we want to apply a sequence of operations on it
// [].map(xx).map(xx)
// P.then(xx).then(xx)

// https://egghead.io/courses/professor-frisby-introduces-composable-functional-javascript

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
    .fold(c => c.toLowerCase());

const result = nextCharForNumberString("  64 ");

console.log(result);
