// Coding challenge 3
'use strict';
// -----------------------------------------------
// Average calculation function
const average = (...scores) => {
    const numOfScores = scores.length;
    const sumOfScores = scores.reduce((a, b) => a + b, 0);
    return sumOfScores/numOfScores;
}
const checkWinner = (team1Avg, team2Avg) => {
    const result = `\n\tAll Blacks: ${team1Avg.toFixed(2)}\n\tSpringboks: ${team2Avg.toFixed(2)}`;
    let winner;
    if (Math.max(team1Avg, team2Avg) >= Math.min(team1Avg, team2Avg)*2) {
        if (team1Avg === team2Avg) {
            winner = 'Draw!' + result;
        } else if (team1Avg > team2Avg) {
            winner = 'Al Blacks Won!' + result;
        } else if (team1Avg < team2Avg) {
            winner = 'Springboks Won!' + result;
        }
    } else {
        winner = 'The winner needs to double the average of the looser';
    }
    return winner;
}
// Test(s) preferences
const testScores = 5;
const tests = 40;
const maxScore = 194; // Hardcoded from real rugby data
// Calculation loop
for (let currentTest=0; currentTest<tests; currentTest++) {
    // Test random values based on the Test(s) preferences
    const test = {allBlacks: [], springboks:[]};
    for (const testTeam of Object.values(test)) {
        for (let score=0; score<testScores; score++) {
            testTeam.push(Math.round(Math.random()*maxScore));
        }
    }
    // Test data to console
    console.log('*******************************');
    console.log('All Blacks: ', test.allBlacks);
    console.log('Springboks: ', test.springboks);
    // Average calculations
    const allBlacksAvg = average(...test.allBlacks);
    const springboksAvg = average(...test.springboks);
    // Winner determination
    console.log(checkWinner(allBlacksAvg,springboksAvg));
}
// -----------------------------------------------
