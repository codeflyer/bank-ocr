const expect = require('chai').expect;

const ocrNumber = require('./index');

const number = `   _  _     _  _  _  _  _
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|`;

describe('Bank OCR', () => {
  describe('Tautological test', () => {
    it('True should be true', () => {
      expect(true).to.be.true;
    })
  });

  describe('Passing a not wellformed string', () => {
    it('Should thrown an error', () => {
      const row1 = '    _| _     _  _  _  _  _ ';
      const row2 = '  | _| _||_||_ |_   ||_||_|';
      const row3 = '  ||_  _|  | _||_|  ||_| _|';

      expect(() => {ocrNumber(`${row1}\n${row2}\n${row3}`)}).to.throw('[OcrNumber] An invalid string is provided');
    })
  })

  describe('Passing a wellformed string', () => {
    it('Should thrown an error', () => {
      const row1 = '    _  _     _  _  _  _  _ ';
      const row2 = '  | _| _||_||_ |_   ||_||_|';
      const row3 = '  ||_  _|  | _||_|  ||_| _|';

      expect(ocrNumber(`${row1}\n${row2}\n${row3}`)).to.be.equal('123456789');
    })
  })
});