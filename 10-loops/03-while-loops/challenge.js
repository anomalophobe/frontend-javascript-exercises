module.exports.stream = function (conditionalFn, actionFn) {
  while (conditionalFn()) {
    actionFn();
  }
}


module.exports.sumNumbers = function (numArray) {
  var x = numArray.length;
  var sum = 0;
  var i = 0;
  while (i < x) {
    sum += numArray[i];
    i++;
  }
  return sum;
}

