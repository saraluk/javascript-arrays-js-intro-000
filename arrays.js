var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array=[],element){
  return [element,...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
   array = array.unshift(element);
return array
}

function addElementToEndOfArray(array,beganElement){
  return [...array,beganElement];
}

function destructivelyAddElementToEndOfArray(array=[],begunElement){
  return array.push(begunElement);
}


function accessElementInArray(array=[],index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array=[]){
  return array.shift()
}

function removeElementFromBeginningOfArray(array=[]) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array=[]) {
  return array.pop();
}

function removeElementFromEndOfArray(array=[]) {
  return array.slice(0, array.length-1);
}
