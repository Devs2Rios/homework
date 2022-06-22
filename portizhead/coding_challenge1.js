/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§
§
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
GOOD LUCK 😀
*/

let d_scores1 = [44, 23, 71],d_scores2 = [85, 54, 41], k_scores1 = [65, 54, 49],k_scores2 = [23, 34, 27];


const calcAverage = (arr) => {
    let sum = arr.reduce((previousValue, currentValue) =>  previousValue + currentValue);
    let average = sum / 3;

    return average;
};

let d_avergae = calcAverage(d_scores1);
let d_avergae2 = calcAverage(d_scores2);
let k_average = calcAverage(k_scores1);
let k_average2 = calcAverage(k_scores2);
// console.log(d_avergae,k_average, 'flag averages');

const checkWinner = (d_average ,k_average) => {
    // console.log(d_average,k_average, 'flag averages');
    if(d_average >= (k_average * 2)){
        // console.log(k_average, 'flag k_average');
        return `Dolphins win (${d_average} vs. ${k_average})`;        
    }else if(k_average >= (d_average * 2)){
        // console.log(d_average, k_average, 'flag averages if k_loose');
        return `Koalas win (${k_average} vs. ${d_average})`
    }else{
        //  console.log(d_average, k_average, 'flag averages if both_loose');
        return 'No team won both loooooooseeeerssss!!!';
    }

};


console.log(checkWinner(d_avergae,k_average));
console.log(checkWinner(d_avergae2,k_average2));
console.log(checkWinner(576, 111));
// console.log(checkWinner((calcAverage(d_scores2), calcAverage(k_scores2))));















