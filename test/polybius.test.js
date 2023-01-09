// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() tests", () => {
  describe("encoding", () => {
    it("encodes messages properly", () => {
      const message = "hello";
      const actual = polybius(message);
      const expected = "3251131343";
      expect(actual).to.equal(expected);
    });

    it("identifes i and j", () => {
      const message = "jinx";
      const actual = polybius(message);
      const expected = "42423335";
      expect(actual).to.equal(expected);
    });

    it("spaces work properly", () => {
      const message = "hi there";
      const actual = polybius(message);
      const expected = "3242 4432512451";
      expect(actual).to.equal(expected);
    });
  });

  describe("decoding", () => {
    it("decodes correctly", () => {
      const message = "3251131343";
      const actual = polybius(message, false);
      const expected = "hello";
      expect(actual).to.equal(expected);
    });

    it("i & j are both offered for 42", () => {
      const message = "42423335";
      const actual = polybius(message, false);
      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("spaces are left as is", () => {
      const message = "3242 4432512451";
      const actual = polybius(message, false);
      const expected = "hi/j there";
      expect(actual).to.equal(expected);
    });

    it("if amount of numbers is odd, returns false", () => {
      const message = "1234 232";
      const actual = polybius(message, false);
      expect(actual).to.be.false;
    });
  });
});
