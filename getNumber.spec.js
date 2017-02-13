const expect = require('chai').expect;
const getNumber = require('./getNumber');
const constants = require('./constants');

describe('getNumber', () => {
  describe('If the number is valid', () => {
    it('Should return true (3)', () => {
      expect(getNumber(' _  _| _|')).to.be.equal(3);
    })
  })

});