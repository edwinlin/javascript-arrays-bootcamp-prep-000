var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementsToBeginningOfArray(array, element){
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.shift().unshift(element)
}

function addElementToEndOfArray(array, element){
  return [array,...element]
}

function destructivelyAddElementToEndOfArray(array, element){
  return array.unshift(array[-1]).push(element)
}