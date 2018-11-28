const multiply = (a, b) => a * b;
const addOne = x => x + 1;
const square = x => x * x;

// ((x * y) + 1)^2
export const operate = (x, y) => {
  const product = multiply(x, y);
  const incremented = addOne(product);
  const squared = square(incremented);

  return squared;
};
