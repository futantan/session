import titlesForYear from "./titlesForYear";

describe("titlesForYear", () => {
  it("should filter titles", () => {
    const books = [
      { title: "t", year: 2018 },
      { title: "h", year: 2018 },
      { title: "i", year: 2018 },
      { title: "s", year: 2018 },
      { title: "n", year: 2017 },
      { title: "o", year: 2017 },
      { title: "t", year: 2017 }
    ];
    expect(titlesForYear(books, 2018)).toEqual(["t", "h", "i", "s"]);
  });
});
