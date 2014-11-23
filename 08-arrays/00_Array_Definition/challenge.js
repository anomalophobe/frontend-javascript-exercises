module.exports.newArray = function (a, b, c, d){
  return [a, b, c, d];
}

module.exports.firstAndLast = function (inArray){
  var i = inArray.length;
  return [inArray[0], inArray[i-1]];
}