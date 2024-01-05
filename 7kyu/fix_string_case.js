function solve(s){
    let upper = 0
    let lower = 0
    s.split('').forEach((x) => x === x.toLowerCase() ? lower++ : upper++)
    return lower < upper ? s.toUpperCase() : s.toLowerCase() 
}