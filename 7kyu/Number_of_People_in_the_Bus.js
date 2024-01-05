var number = function(busStops){
    let busPop = 0
    busStops.forEach((x) => busPop = (busPop + x[0]) - x[1])
    return busPop
  }