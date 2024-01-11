function maxMultiple(divisor, bound){
    let num = 0
    for (i = bound; i >= 1; i--) {
      if (i % divisor === 0) {
        num = i
        break
      }
    }
    return num
  }