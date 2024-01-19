var filterString = function(value) {
    return parseInt(value.split('').filter((x) => !isNaN(x)).join(''))
  }