function getNumberBlock(inputString) {
  if (typeof inputString !== 'string') {
    throw new Error('The input expected is a string');
  }

  const rows = inputString.split('\n');
  if (rows.length !== 3) {
    throw new Error('The input should be made by three rows');
  }

  if (rows[0].length !== rows[1].length || rows[0].length !== rows[2].length) {
    throw new Error('The input should be made by equal length rows');
  }

  rows.forEach(item => {
    if (item.length % 3 !== 0) {
      throw new Error('The input should be made by rows length multiple of 3');
    }
  });

  rows.forEach(item => {
    if (!item.match(/^[_\| ]+$/)) {
      throw new Error('The valid chars are only pipes and undescore');
    }
  });

  const retList = [];
  for (let i = 0; i < rows[0].length; i += 3) {
    retList.push(rows[0].substr(i, 3) + rows[1].substr(i, 3) + rows[2].substr(i, 3));
  }

  return retList;
}

module.exports = getNumberBlock;
