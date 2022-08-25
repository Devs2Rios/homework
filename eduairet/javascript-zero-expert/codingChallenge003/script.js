// Coding challenge 3

// Average calculation function
const average = (...scores) => {
    const numOfScores = scores.length;
    const sumOfScores = scores.reduce((a, b) => a + b, 0);
    return sumOfScores/numOfScores;
}

// Test data
const testData = {
    test1: {allBlacks: [150, 193, 180], springboks: [87, 176, 187]},
    test2: {allBlacks: [34, 151, 4], springboks: [153, 178, 23]},
    test3: {allBlacks: [167, 8, 6], springboks: [109, 5, 0]}
}

// Calculation loop
for (test of Object.values(testData)) {
    const allBlacksAvg = average(...test.allBlacks);
    const springboksAvg = average(...test.springboks);
    const result = `\n\tAll Blacks: ${allBlacksAvg.toFixed(2)}\n\tSpringboks: ${springboksAvg.toFixed(2)}`;
    let winner;
    if (Math.max(allBlacksAvg, springboksAvg) >= 100) {
        if (allBlacksAvg === springboksAvg) {
            winner = 'Draw!' + result;
        } else if (allBlacksAvg > springboksAvg) {
            winner = 'Al Blacks Won!' + result;
        } else if (allBlacksAvg < springboksAvg) {
            winner = 'Springboks Won!' + result;
        }
    } else {
        winner = 'More than 100 average is needed!' + result;
    }
    console.log(winner);
}
