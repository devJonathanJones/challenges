function rowWeights(array){
    let team1 = 0,team2 = 0
    array.forEach((x, i) => i % 2 === 0 ? team1 += x : team2 += x)
    return [team1, team2]
  }