module.exports.getKeys = function (inObj) {
  var newArr = [];
  for (var p in inObj) {
    newArr.push(p);
  }
  return newArr;
}

module.exports.getValues = function (inObj) {
  var newArr = [];
  for (var p in inObj) {
    newArr.push(inObj[p]);
  }
  return newArr;
}

module.exports.objectToArray = function (inObj) {
  var newArr = [];
  if (inObj.length === 0) {
    return newArr;
  } else {
    for (var p in inObj) {
      newArr.push(p + " is " + inObj[p]);
    }
    return newArr;
  }
}

