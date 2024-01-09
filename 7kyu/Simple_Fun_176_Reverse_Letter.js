function reverseLetter(str) {
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    let newStr = []
    str.split('').forEach((x) => chars.includes(x) ? newStr.push(x) : null)
    return newStr.reverse().join('')
  }