import { isEligibleToVote } from "./isEligibleToVote";

describe("isEligibleToVote", () => {
  it("should not able to vote if younger than 18 ", () => {
    expect(isEligibleToVote({ birthCountry: "CHINA", naturalizationDate: new Date(), age: 17 })).toBeFalsy();
  });

  it("should be able to vote if later became a citizen", () => {
    expect(isEligibleToVote({ birthCountry: "xx", naturalizationDate: new Date(), age: 19 })).toBeTruthy();
  });

  it("should not be able to vote if not a citizen", () => {
    expect(isEligibleToVote({ birthCountry: "xx", naturalizationDate: null, age: 19 })).toBeFalsy();
  });
});
