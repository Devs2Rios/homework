// Coding challenge 6 - Part 2 #2
'use strict';
// -----------------------------------------------
// Functions
function calcTip (bill, tip) {
    return bill * tip;
} 
function totalCheck(bill, tip) {
    const tipRegEx = /\d{1,3}%/;
    return (
        tipRegEx.exec(tip) ?
        bill + calcTip(bill, parseInt(tip.replace('%', '')) / 100, 10) :
        `Please enter a percentage string like 10% not ${typeof tip} ${tip}`
    );
};
function calcAverage(arr) {
    return arr.reduce((a,b) => a+b, 0) / arr.length;
};
function randomBills(bills) {
    let billsValues = [];
    for (let bill=0; bill<bills; bill++) {
        billsValues.push(Math.random()*500);
    }
    return billsValues
}
// Preset values
const billPercentages = ['5%', '10%', '15%'];
const tests = 20;
const bills = randomBills(tests);
// Total check calculation
let tipsTotals = [];
for (const bill of bills) {
    const randomTip = billPercentages[Math.round(Math.random() * (billPercentages.length - 1))];
    tipsTotals.push({subtotal:bill, tip: randomTip, total: totalCheck(bill,randomTip)});
}
const totals = tipsTotals.map(tipTotal => tipTotal.total);
// Console results
console.log(tipsTotals);
console.log(totals);
console.log(`The totals average is $${calcAverage(totals).toFixed(2)}`);
// -----------------------------------------------
