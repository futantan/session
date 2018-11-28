// Let’s say we’re working on a voting system.
// Given a person, we’d like to be able to determine if that person is eligible to vote.
// Based on our current knowledge, a person must be
// 1. at least 18 years old
// 2. be a citizen in order to be able to vote.
// Someone is a citizen if they were born in the country or if they later became a citizen through naturalization.
import * as R from "ramda";

const OUR_COUNTRY = "CHINA";

const wasBornInCountry = person => person.birthCountry === OUR_COUNTRY;
const wasNaturalized = person => Boolean(person.naturalizationDate);
const isOver18 = person => person.age >= 18;

const isCitizen = R.either(wasBornInCountry, wasNaturalized);

export const isEligibleToVote = R.both(isOver18, isCitizen);
