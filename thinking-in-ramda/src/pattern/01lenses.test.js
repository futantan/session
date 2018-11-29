import { upperUserFirstName } from "../pattern/01lenses";

describe("upperUserFirstName", () => {
  it("should upper user's first name", () => {
    const user = { id: 1, name: { first: "alice", last: "green" } };
    const expected = { id: 1, name: { first: "ALICE", last: "green" } };

    expect(upperUserFirstName(user)).toEqual(expected);
  });
});
