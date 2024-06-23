const uwuify = require("../src");

describe("uwuify", () => {
  it("returns a string", () =>
    expect(typeof uwuify("Hello, world!")).toBe("string"));

  it("replaces r's and l's with w's", () =>
    expect(uwuify("Hello, world!", 0, 0, 0)).toBe("hewwo, wowwd!"));

  it("stutters", () =>
    expect(uwuify("Hello, world!", 1, 0, 0)).toBe("h-hewwo, w-wowwd!"));

  it("adds emojis", () =>
    expect(uwuify("Hello, world!", 0, 1, 0)).toMatch(/hewwo, wowwd! .+/));

  it("adds tildes", () =>
    expect(uwuify("Hello, world!", 0, 0, 1)).toBe("hewwo, wowwd~"));
});
