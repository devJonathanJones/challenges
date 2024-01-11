function checkExam(array1, array2) {
    let score = 0
    
    for (let i = 0; i < array1.length; i++) {
        const correct = array1[i]
        const answer = array2[i]
        
        if (answer === correct) {
            score += 4
        } else if (!answer.trim()) {
            
        } else {
            score--
        }
    }
    return Math.max(score, 0)
}