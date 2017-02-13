const constants = require('./constants');
function isValidNumber(testNumber) {

  let found = false;
  Object.keys(constants).forEach(item => {
    if(constants[item] === testNumber) {
      found = true;
    }
  });
  return found;

}

module.exports = isValidNumber;
