module.exports.createCourse = function createCourse (courseTitle, courseDuration, courseStudents){
  var courseObj = {
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents
  };
  return courseObj;
}

module.exports.addProperty = function (object, newProp, newValue){
  var newObj = object;
  for (var p in object){
    if (object.p === newProp){
      return object;
    } else {
      newObj[newProp] = newValue;
      return newObj;
    }
  }
}

module.exports.formLetter = function (letter){
  var newLetter = "Hello " + letter.recipient + ",\n\n" + letter.msg + 
      "\n\nSincerely,\n" + letter.sender;
  return newLetter;
}

module.exports.canIGet = function (item, money){
  var matrix = {
    "MacBook Air" : 999,
    "MacBook Pro" : 1299,
    "Mac Pro" : 2499,
    "Apple Sticker" : 1
  };
  return (matrix[item] <= money);
}
