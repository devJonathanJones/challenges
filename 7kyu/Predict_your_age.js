function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    const ages = [age1,age2,age3,age4,age5,age6,age7,age8]
    return Math.floor(Math.sqrt(ages.reduce((acc, val) => acc + val * val, 0)) / 2)
  }