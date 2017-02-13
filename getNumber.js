const constants = require('./constants');
function getNumber(testNumber) {
  let retValue = null;
  Object.keys(constants).forEach(item => {
    if(constants[item] === testNumber) {
      retValue = Number(item.substr(4, 1));
    }
  });

  return retValue;
}

module.exports = getNumber;
