function bump(x){
    let bumps = 0
    x.split('').forEach((n) => n === 'n' ? bumps++ : null)
    return bumps <= 15 ? 'Woohoo!' : 'Car Dead'
  }