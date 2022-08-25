// Coding challenge 7 - Part 2 #3
'use strict';
// -----------------------------------------------
// Tests object with functions
const tests = {
    pedro: {name: "Pedro Ortíz", mass: 74, height: 1.80, bmi: 0},
    eduardo: {name: "Eduardo Hernández", mass: 62, height: 1.65, bmi: 0},
    higher: '',
    calcBMIs: function() {
        for (const test of [this.pedro, this.eduardo]) {
            test['calcBMI'] = function() {
                this.bmi = this.mass / this.height ** 2;
                return this.bmi;
            };
            test.calcBMI();
        }
    },
    getHigher: function() {
        // Calculate the BMIs
        this.calcBMIs();
        const fixedBMIs = {pedro: this.pedro.bmi.toFixed(2), eduardo: this.eduardo.bmi.toFixed(2)};
        let higherString = `${this.pedro.name}'s BMI (${fixedBMIs.pedro}) is %% than ${this.eduardo.name}'s (${fixedBMIs.eduardo})!`;
        this.higher = higherString.replace('%%',
            this.pedro.bmi > this.eduardo.bmi ? 'higher' :
            this.pedro.bmi < this.eduardo.bmi ? 'lower' :
            this.pedro.bmi === this.eduardo.bmi ? 'equal' :
            'unknown'
        );
        return this.higher;
    }
};
// See the results in the console
const hr = '------------------------------------------------------------------------------';
tests.getHigher();
console.log(hr);
console.log(tests);
console.log(hr);
console.log(tests.higher);
console.log(hr+'\n');
// -----------------------------------------------
