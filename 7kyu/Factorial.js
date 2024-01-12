function factorial(n)
{
  let total = 1
  if (n > 12 || n < 0) {
    throw new RangeError('Value not between 0 and 12')
  } else {
    for (i = n; i > 0; i--) {
      console.log(total, n, i)
      total = total * i
    }
  }
  return total
}