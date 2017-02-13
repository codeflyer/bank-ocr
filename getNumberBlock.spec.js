const expect = require('chai').expect;
const getNumberBlock = require('./getNumberBlock');
const constants = require('./constants');

const sampleRow1 = '    _  _     _  _  _  _  _ ';
const sampleRow2 = '  | _| _||_||_ |_   ||_||_|';
const sampleRow3 = '  ||_  _|  | _||_|  ||_| _|';

describe('getNumberBlock', () => {
  describe('If the input is not a string', () => {
    it('should thrown an exception', () => {
      expect(() => {
        getNumberBlock(4)
      }).to.throw('The input expected is a string');
    })
  });

  describe('Given an incorrect string', () => {
    it('should be made by 3 lines', () => {
      expect(() => {
        getNumberBlock('abc\ndef')
      }).to.throw('The input should be made by three rows');
    });
    it('The lines should be of equal length', () => {
      expect(() => {
        getNumberBlock('abc\ndef\ner')
      }).to.throw('The input should be made by equal length rows');
    });
    it('The lines length should be a multiple of 3', () => {
      expect(() => {
        getNumberBlock('ab\nde\ner')
      }).to.throw('The input should be made by rows length multiple of 3');
    });
    it('The character allowed are only pipe spaces and underscore', () => {
      expect(() => {
        getNumberBlock('__|\n__|\n_ a')
      }).to.throw('The valid chars are only pipes and undescore');
    });
  });

  describe('Given a valid string', () => {
    it('Should return an array of string (12)', () => {
      const row1 = '    _ ';
      const row2 = '  | _|';
      const row3 = '  ||_ ';

      expect(getNumberBlock(`${row1}\n${row2}\n${row3}`)).to.be.eql(['     |  |', ' _  _||_ ']);
    });

    it('Should return an array of string (123456789)', () => {
      const row1 = '    _  _     _  _  _  _  _ ';
      const row2 = '  | _| _||_||_ |_   ||_||_|';
      const row3 = '  ||_  _|  | _||_|  ||_| _|';

      expect(getNumberBlock(`${row1}\n${row2}\n${row3}`))
          .to.be.eql([
        constants.char1,
        constants.char2,
        constants.char3,
        constants.char4,
        constants.char5,
        constants.char6,
        constants.char7,
        constants.char8,
        constants.char9
      ]);
    });
  });

});