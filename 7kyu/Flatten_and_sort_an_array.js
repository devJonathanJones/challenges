"use strict";

function flattenAndSort(array) {
  let newArr = []
  array.forEach((x) => {
    x.forEach((y) => newArr.push(y))
  })
  return newArr.sort((a, b) => a - b)
}