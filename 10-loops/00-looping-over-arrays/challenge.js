module.exports.sumNumbers = function (numArray){
  var x = numArray.length;
  var sum = 0;
  if (x === 0){
    return sum;
  } else {
    for (var i = 0; i < x; i++){
      sum += numArray[i];
      }
    return sum;
  }
}

module.exports.splitAndLowerCaseString = function (inputString){
  var newString = inputString.toLowerCase().split(" ");
  return newString;
};  

module.exports.addIndex = function (inArray){
  var x = inArray.length;
  var outArray = [];
  var tmpString = "";
  for (var i = 0; i < x; i++){
    tmpString = i + " is " + inArray[i].toString();
    outArray.push(tmpString);    
  }
  return outArray;
}
