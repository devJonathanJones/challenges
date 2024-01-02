function getMiddle(s) {
    if (s.length % 2 === 0) {
      return s.slice(s.length / 2 - 1, s.length / 2 + 1)
    } else {
      return s.slice(s.length / 2, s.length / 2 + 1)
    }
  }



const filter_list = (list) => list.filter((x) => typeof x === 'number')



const isSquare = (num) => Math.sqrt(num) % 1 === 0 ? true : false



function XO(str) {
  let xCount = 0
  let oCount = 0
  str.split('').map((x) => x.toLowerCase() === 'x' ? xCount++ : x.toLowerCase() === 'o' ? oCount++ : null)
  return xCount === oCount ? true : false
}



const findShort = (str) => str.split(' ').reduce((a, b) => a.length <= b.length ? a : b).length



function getSum(a, b) {
  let sum = 0
  for (i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i
  }
  return sum
}



function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a, b) => a - b)
  return numbers[0] + numbers[1]
}



function DNAStrand(dna){
  let newArr = []
  dna.split('').forEach((x) => {
    if (x === 'A') {
      newArr.push('T')
    } else if (x === 'T') {
      newArr.push('A')
    } else if (x === 'G') {
      newArr.push('C')
    } else if (x === 'C') {
      newArr.push('G')
    } else {
      newArr.push(x)
    }
  })
  return newArr.join('')
}



function longest(s1, s2) {
  newArr = []
  s1.split('').forEach((x) => newArr.includes(x) ? null : newArr.push(x))
  s2.split('').forEach((x) => newArr.includes(x) ? null : newArr.push(x))
  return newArr.sort().join('')
}



function accum(s) {
  let newArr = []
  s.split('').map((x, i) => {
    let str = x.toLowerCase().repeat(i + 1);
    newArr.push(str.charAt(0).toUpperCase() + str.slice(1));
  })
  return newArr.join('-')
}



const friend = (friends) => friends.filter((name) => name.length === 4)



function openOrSenior(data){
  let newArr = []
  data.forEach((x) => {
    if (x[0] > 54 && x[1] > 7) {
      newArr.push('Senior') 
    } else {
      newArr.push('Open')
    }
  })
  return newArr
}



function findNextSquare(sq) {
  if (Math.sqrt(sq) % 1 != 0) {
    return -1
  } else {
    return (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1)
  }
}



var uniqueInOrder=function(iterable){
  let newArr = []
  if (Array.isArray(iterable)){
    iterable.forEach((itm, ind) => {
      itm === iterable[ind - 1] ? null : newArr.push(itm)
    })
  } else {
    iterable.split('').forEach((itm, ind) => {
      itm === iterable[ind - 1] ? null : newArr.push(itm)
    })
  }
  return newArr
}



function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}



function oddOrEven(array) {
  if (array.length === 0) {
    return 'even'
  } else {
    return array.reduce((acc, val) => acc + val, 0) % 2 === 0 ? 'even' : 'odd'
  }
}



function smallEnough(a, limit){
  a.sort((num1, num2) => num1 - num2)
  return a[a.length - 1] <= limit ? true : false
}



function divisibleBy(numbers, divisor){
  let newArr = []
  numbers.forEach((x) => x % divisor === 0 ? newArr.push(x) : null)
  return newArr
}



const getAverage = (marks) => Math.floor(marks.reduce((acc, val) => acc + val, 0) / marks.length)



function printerError(s) {
  const validCodes = 'abcdefghijklm'
  let errors = 0
  s.split('').forEach((x) => !validCodes.includes(x) ? errors++ : null)
  return `${errors}/${s.length}`
}



function isTriangle (a, b, c) {
  if (a + b <= c) {
    return false
  } else if (b + c <= a) {
    return false
  } else if (a + c <= b) {
    return false
  } else {
    return true
  }
}



const solution = (str, ending) => str.slice(-Math.abs(ending.length)) === ending ? true : ending.length === 0 ? true : false



function reverseWords(str) {
  let newArr = []
  str.split(' ').forEach((x) => newArr.push(x.split('').reverse().join('')))
  return newArr.join(' ')
}



var number=function(array){
  if (array.length === 0) {
    return []
  } else {
    return array.map((x, i) => `${i + 1}: ${x}`)
  }
}



const minMax = (arr) => [Math.min(...arr), Math.max(...arr)]



const sortByLength = (arr) => arr.sort((a, b) => a.length - b.length)



const solution = (nums) => nums === null ? [] : nums.sort((a, b) => a - b) 



const removeUrlAnchor = (url) => url.split('#')[0]



