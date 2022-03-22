function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i]
    }
  }
  return sum
}

function opposite(number) {
  if (number === 0) {
    return 0
  }
  return -number;
}

function removeChar(str) {
  return str.slice(1, -1);
}

function repeatStr(n, s) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += s
  }
  return result
}

module.exports = {
  positiveSum,
  opposite,
  removeChar,
  repeatStr
}
