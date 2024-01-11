function nbDig(n, d) {
    let count = 0
    for (i = 0; i <= n; i++) {
      let num = i * i
      String(num).split('').forEach((x) => x === String(d) ? count++ : null)
    }
    return count
}