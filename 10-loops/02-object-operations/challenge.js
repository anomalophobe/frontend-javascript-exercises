module.exports.copy = function (inObj) {
  var newObj = {};
  for (var p in inObj){
    newObj[p] = inObj[p]
  }
  return newObj;
}

module.exports.extend = function (dest, src) {
  var newObj = dest;
  for (var p in src) {
    newObj[p] = src[p];
  }
  return newObj;
}

module.exports.hasElems = function (inObj, inArr) {
  var x = inArr.length;
  var objCnt = 0;
  var hitCnt = 0;
  var newArr = [];
  if (x === 0) {
    return true;
  } else {
    for (var p in inObj) {
      objCnt++
      for (var i = 0; i < x; i++) {
        if (inArr[i] === p) {
          hitCnt++
        }
      }
    }
    return (hitCnt <= objCnt) && (hitCnt === x);
  }
}