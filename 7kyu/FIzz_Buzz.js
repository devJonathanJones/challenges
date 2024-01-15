function fizzbuzz(n) {
    let newArr = []
    for(i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        newArr.push('FizzBuzz')
      } else if (i % 3 === 0) {
        newArr.push('Fizz')
      } else if (i % 5 === 0) {
        newArr.push('Buzz')
      } else {
        newArr.push(i)
      }
    }
    return newArr
  }