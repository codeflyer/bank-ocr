const expect = require('chai').expect;
const isValidNumber = require('./isValidNumber');
const constants = require('./constants');

describe('isValidNumber', () => {
  describe('If the number is not valid', () => {
    it('Should return false', () => {
      expect(isValidNumber('|    |  |')).to.be.false;
    })
  })

  describe('If the number is valid', () => {
    it('Should return true (3)', () => {
      expect(isValidNumber(' _  _| _|')).to.be.true;
    })
  })

});