// what if we want to use functions that take more than one argument?
import * as R from "ramda";

const publishedInYear = R.curry((book, year) => book.year === year);

const titlesForYear = (books, year) => {
  const selected = R.filter(publishedInYear(R.__, year), books);

  return R.map(book => book.title, selected);
};

export default titlesForYear;
