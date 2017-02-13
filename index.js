const getNumberBlock = require('./getNumberBlock');
const isValidNumber = require('./isValidNumber');
const getNumber = require('./getNumber');

function ocrNumber(stringToOcr) {
  try {

  // Read the lines and Split the lines in 3x3 block
  const blocks = getNumberBlock(stringToOcr);
  blocks.forEach(item => {
    if(!isValidNumber(item)) {
      throw new Error('An invalid string is provided')
    }
  });


  return blocks.reduce((accumulator, item) => {
    accumulator += getNumber(item);
    return accumulator;
  }, '');
  // parse a single number

  // return the number
  } catch (e) {
    throw new Error('[OcrNumber] ' + e.message);
  }
}

module.exports = ocrNumber;