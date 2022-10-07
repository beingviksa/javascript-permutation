const getPermutations = require("./main");

describe("javascript permutation", () => {
  test("should replace the * with 0 and 1 ", () => {
    expect(getPermutations("*1")).toStrictEqual(["01", "11"]);
    expect(getPermutations("*10*")).toStrictEqual([
      "1100",
      "1101",
      "0100",
      "0101",
    ]);
  });

  test("should return the input string if there is no * ", () => {
    expect(getPermutations("101")).toStrictEqual("101");
  });

  test("should return the empty string if there is no input string passed", () => {
    expect(getPermutations("")).toStrictEqual("");
  });
});
