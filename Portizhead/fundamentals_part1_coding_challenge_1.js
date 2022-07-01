/* Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter). 

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

*/
'use strict';
let mark_mass_1 = 78;
let mark_height_1 = 1.69;
let john_mass_1 = 92;
let john_height_1 = 1.95;
let mark_mass_2 = 95;
let mark_height_2 = 1.88;
let john_mass_2 = 85;
let john_height_2 = 1.76;

//let markHigherBMI = true;

let mark_BMI_data1 = 0;

mark_BMI_data1 = mark_mass_1 / (mark_height_1 ** 2);


let john_BMI_data1 = 0;

john_BMI_data1 = john_mass_1 / (john_height_1 ** 2);

if(mark_BMI_data1 > john_BMI_data1){

    console.log(`${mark_BMI_data1} > ${john_BMI_data1} = ${markHigherBMI}`);
} else{

    markHigherBMI = false;
    console.log(`${mark_BMI_data1} > ${john_BMI_data1} = ${markHigherBMI}`);
}

//////////////////////////////////////////////////////////////


let mark_BMI_data2 = 0;

mark_BMI_data2 = mark_mass_2 / (mark_height_2 ** 2);


let john_BMI_data2 = 0;

john_BMI_data2 = john_mass_2 / (john_height_2 ** 2);

if(mark_BMI_data2 > john_BMI_data2cle){

    console.log(`${mark_BMI_data2} > ${john_BMI_data2} = ${markHigherBMI}`);
} else{

    markHigherBMI = false;
    console.log(`${mark_BMI_data2} > ${john_BMI_data2} = ${markHigherBMI}`);
}


//let BMI_data2 = mass / (height ** 2);




