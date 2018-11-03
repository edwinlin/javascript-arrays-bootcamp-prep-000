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
  newArray = array.splice(-1).push(element)
  return newArray
}

function removeElementFromEndOfArray(){
  return array.slice(-1)
}