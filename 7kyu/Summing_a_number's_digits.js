function sumDigits(number) {
    let num = Math.abs(number)
    return String(num).split('').map(Number).reduce((acc, val) => acc + val, 0)
  }
  