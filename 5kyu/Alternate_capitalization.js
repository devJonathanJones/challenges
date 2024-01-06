function capitalize(s){
    const even = s.split('').map((x, i) => i % 2 === 0 ? x.toUpperCase() : x.toLowerCase()).join('')
    const odd = s.split('').map((x, i) => i % 2 != 0 ? x.toUpperCase() : x.toLowerCase()).join('')
    
    return [even, odd]
  }