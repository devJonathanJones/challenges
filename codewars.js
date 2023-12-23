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