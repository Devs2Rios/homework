/* 
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀
*/

let mark_mass_1 = 78;
let mark_height_1 = 1.69;
let john_mass_1 = 92;
let john_height_1 = 1.95;
let mark_mass_2 = 95;
let mark_height_2 = 1.88;
let john_mass_2 = 85;
let john_height_2 = 1.76;

let markHigherBMI = true;

console.log("First BMI: "); 
console.log(`Marks mass: ${mark_mass_1}`);
console.log(`Marks height: ${mark_height_1}`);
let mark_BMI_data1 = 0;

mark_BMI_data1 = mark_mass_1 / (mark_height_1 ** 2);


console.log(`Johns mass: ${john_mass_1}`);
console.log(`Johns height: ${john_height_1}`);
let john_BMI_data1 = 0;

john_BMI_data1 = john_mass_1 / (john_height_1 ** 2);

if(mark_BMI_data1 > john_BMI_data1){

    console.log(`Marks BMI ${Math.round(mark_BMI_data1)} is higher than Johns ${Math.round(john_BMI_data1)}? = ${markHigherBMI}`);
} else{

    markHigherBMI = false;
    console.log(`Marks BMI ${Math.round(mark_BMI_data1)} is higher than Johns ${Math.round(john_BMI_data1)}? = ${markHigherBMI}`);
}

//////////////////////////////////////////////////////////////
console.log("Second BMI:");
console.log(`Marks mass: ${mark_mass_2}`);
console.log(`Marks height: ${mark_height_2}`);
let mark_BMI_data2 = 0;

mark_BMI_data2 = mark_mass_2 / (mark_height_2 ** 2);


console.log(`Johns mass: ${john_mass_2}`);
console.log(`Johns height: ${john_height_2}`);
let john_BMI_data2 = 0;

john_BMI_data2 = john_mass_2 / (john_height_2 ** 2);


if(mark_BMI_data2 > john_BMI_data2){
    console.log(`Marks BMI ${Math.round(mark_BMI_data2)} is higher than Johns ${Math.round(john_BMI_data2)}? = ${markHigherBMI}`);
} else{

    markHigherBMI = false;
    console.log(`Marks BMI ${Math.round(mark_BMI_data2)} is higher than Johns ${Math.round(john_BMI_data2)}? = ${markHigherBMI}`);
}