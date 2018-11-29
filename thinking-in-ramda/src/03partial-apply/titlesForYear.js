// what if we want to use functions that take more than one argument?
import * as R from "ramda";

const publishedInYear = R.curry((year, book) => book.year === year);

const titlesForYear = (books, year) =>
  R.compose(
    R.map(book => book.title),
    R.filter(publishedInYear(year))
  )(books);

export default titlesForYear;
