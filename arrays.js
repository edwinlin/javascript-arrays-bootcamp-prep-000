var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementsToBeginningOfArray(array, element){
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.shift()
  return array.unshift(element)
}

function addElementToEndOfArray(array, element){
  return [array,...element]
}

function destructivelyAddElementToEndOfArray(array, element){
  // newArray = array.splice().push(element)
  return newArray
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  newArray = array.slice(0, array.length-1)
  return newArray
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length-1)
}