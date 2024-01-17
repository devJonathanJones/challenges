function addLength(str) {
    let newArr = []
    str.split(' ').forEach((x) => newArr.push(`${x} ${x.length}`))
    return newArr
  }
  