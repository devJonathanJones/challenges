function minValue(values){
    let newArr = []
    values.forEach((x) => newArr.includes(x) ? null : newArr.push(x))
    return Number(newArr.sort((a, b) => a - b).join(''))
  }