module.exports.reversePlusOne = function (inArray){
  var newArray = [];
  var newVal = 0;
  var arrLength = inArray.length;
  for (var i = 0; i < arrLength; i++){
    newVal = inArray.pop();
    newArray.push(newVal);
  }
  newArray.unshift(1);
  return newArray;
}

module.exports.plusesEverywhere = function (inArray){
  var arrString = inArray[0].toString();
  var arrLength = inArray.length;
  for (var i = 1; i < arrLength; i++){
    arrString = arrString + "+" + inArray[i];
  }
  return arrString;
}

module.exports.arrayQuantityPlusOne = function (inArray){
  var numItems = inArray.length + 1;
  return numItems;
}