// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() tests", () => {
  describe("error handling", () => {
    it("no alphabet, return false", () => {
      const message = "message";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });

    it("not 26 char, return false", () => {
      const message = "message";
      const alphabet = "short";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("no unique characters, return false", () => {
      const message = "message";
      const alphabet = "abcabcabcabcabcabcabcabcab";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding", () => {
    it("encodes properly", () => {
      const message = "hello";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet);
      const expected = "rmwwl";
      expect(actual).to.equal(expected);
    });

    it("can encode using special characters", () => {
      const message = "sunshine";
      const alphabet = "xoyqmcgrukswaflnth.jpzibev";
      const actual = substitution(message, alphabet);
      const expected = ".pf.rufm";
      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = "hello there";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet);
      const expected = "rmwwl jrmhm";
      expect(actual).to.equal(expected);
    });
  });

  describe("decoding", () => {
    it("decodes properly", () => {
      const message = "rmwwl";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet, false);
      const expected = "hello";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      const message = ".pf.rufm";
      const alphabet = "xoyqmcgrukswaflnth.jpzibev";
      const actual = substitution(message, alphabet, false);
      const expected = "sunshine";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = "rmwwl jrmhm";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet, false);
      const expected = "hello there";

      expect(actual).to.equal(expected);
    });
  });
});