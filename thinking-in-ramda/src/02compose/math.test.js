import { operate } from "./math";

describe("math", () => {
  it("should calculate", () => {
    expect(operate(3, 4)).toBe(169);
  });
});
