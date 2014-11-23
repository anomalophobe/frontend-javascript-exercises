module.exports.addItem = function (itemToAdd, myList){
  var listLength = myList.length;
  var i = 0;
  for (i; i < listLength; i++){
    if (itemToAdd === myList[i]){
      return myList;
    } else {
      myList.push(itemToAdd);
    }
    return myList;
  }
}

module.exports.reverseSortedList = function (myArray){
    myArray.sort();
    return myArray.reverse();
}