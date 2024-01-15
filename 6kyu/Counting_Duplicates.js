function duplicateCount(text){
    let sum = 0
    let newArr = []
    let Arr = []
    text.toLowerCase().split('').forEach((x) => {
      if (newArr.includes(x) && !Arr.includes(x)) {
        sum++
        Arr.push(x)
      } else {
        newArr.push(x)
      }
    })
    return sum
  }