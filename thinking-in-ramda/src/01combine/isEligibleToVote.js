// Let’s say we’re working on a voting system.
// Given a person, we’d like to be able to determine if that person is eligible to vote.
// Based on our current knowledge, a person must be
// 1. at least 18 years old
// 2. be a citizen in order to be able to vote.
// Someone is a citizen if they were born in the country or if they later became a citizen through naturalization.

const OUR_COUNTRY = "CHINA";

export const isEligibleToVote = person => {
  if ((person.birthCountry === OUR_COUNTRY || Boolean(person.naturalizationDate)) && person.age >= 18) {
    return true;
  }
  return false;
};
