// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 😀

function avg(sc1, sc2, sc3) {
    let sum = sc1 + sc2 + sc3;
    let div = sum / 3;
    return Math.round(div);
}
 
function comparassion(avg1, avg2){
    if(avg1 > avg2){

        return('Dolphins are the winners')
    }else if(avg1 === avg2){

        return('Both teams tied');
    }else{

        return('Koalas are the winners')
    }
}

let dolphins_1st_score = avg(96, 108, 89)
let koalas_1st_score = avg(88, 91, 110);
let dolphins_2nd_score = avg(97, 112, 101);
let koalas_2nd_score = avg(109, 95, 123);
let dolphins_3rd_score = avg(97, 112, 101);
let koalas_3rd_score = avg(109, 95, 106);

console.log('First Match:')
console.log(`Dolphins 1st score is: `+dolphins_1st_score);
console.log(`Koalas 1st score is: `+koalas_1st_score);
console.log(comparassion(dolphins_1st_score, koalas_1st_score))

console.log('*****************************')
console.log('Second Match:')
console.log(`Dolphins 2nd score is: `+dolphins_2nd_score);
console.log(`Koalas 2nd score is: `+koalas_2nd_score);
console.log(comparassion(dolphins_2nd_score, koalas_2nd_score))

console.log('*****************************')
console.log('Third Match:')
console.log(`Dolphins 3rd score is: `+dolphins_3rd_score);
console.log(`Koalas 3rd score is: `+koalas_3rd_score);
console.log(comparassion(dolphins_3rd_score, koalas_3rd_score))

/*let dolphins_2nd_score = avg(97, 112, 101);
let koalas_2nd_score = avg(109, 95, 123);

console.log(`Dolphins 2nd score is: `+dolphins_2nd_score);
console.log(`Koalas 2nd score is: `+koalas_2nd_score);*/


