function roundToNext5(n){
    let num = n
    while (num % 5 != 0) {
      num++
    }
    return num
  }