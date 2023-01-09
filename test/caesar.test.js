// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar tests", () => {
    describe("any problems with the shift", () => {
      it("returns false if the shift is 0", () => {
        const message = "hello world";
        const shift = 0;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
      });
  
      it("returns false if the shift is above 25", () => {
        const message = "hello world";
        const shift = 26;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
      });
  
      it("returns false if the shift is less than -25", () => {
        const message = "hello world";
        const shift = -26;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
      });
    });
  
    describe("encoding", () => {
      it("properly encodes a standard message", () => {
        const message = "laptop";
        const shift = 5;
        const actual = caesar(message, shift);
        const expected = "qfuytu";
        expect(actual).to.equal(expected);
      });
  
      it("properly includes special characters", () => {
        const message = "are you there?";
        const shift = 5;
        const actual = caesar(message, shift);
        const expected = "fwj dtz ymjwj?";
        expect(actual).to.equal(expected);
      });
  
      it("ignores capitals", () => {
        const message = "LoWERcASe";
        const shift = 5;
        const actual = caesar(message, shift);
        const expected = "qtbjwhfxj";
        expect(actual).to.equal(expected);
      });
  
      it("wraps the alphabet if necessary", () => {
        const message = "xylophone zed";
        const shift = 5;
        const actual = caesar(message, shift);
        const expected = "cdqtumtsj eji";
        expect(actual).to.equal(expected);
      });
  
      it("can process a negative shift", () => {
        const message = "can we do it?";
        const shift = -5;
        const actual = caesar(message, shift);
        const expected = "xvi rz yj do?";
        expect(actual).to.equal(expected);
      });
    });
  
    describe("decoding", () => {
      it("properly decodes a standard message", () => {
        const message = "MJQQT";
        const shift = 5;
        const actual = caesar(message, shift, false);
        const expected = "hello";
        expect(actual).to.equal(expected);
      });
  
      it("properly translates special characters", () => {
        const message = "MJQQT BTWQI";
        const shift = 5;
        const actual = caesar(message, shift, false);
        const expected = "hello world";
        expect(actual).to.equal(expected);
      });
  
      it("ignores capitals", () => {
        const message = "QTBJWHFXJ";
        const shift = 5;
        const actual = caesar(message, shift, false);
        const expected = "lowercase";
        expect(actual).to.equal(expected);
      });

      it("wraps when neccesary", () => {
        const message = "cdqtumtsj eji";
        const shift = 5;
        const actual = caesar(message, shift, false);
        const expected = "xylophone zed";
        expect(actual).to.equal(expected);
      });
  
      it("accepts negative shift", () => {
        const message = "STGJKCJIZ UZY";
        const shift = -5;
        const actual = caesar(message, shift, false);
        const expected = "xylophone zed";
        expect(actual).to.equal(expected);
      });
    });
  });
  