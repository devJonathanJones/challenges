var capitals = function (word) {
    const caps = []
      word.split('').forEach((x, i) => x === x.toUpperCase() ? caps.push(i) : null)
    return caps
  };