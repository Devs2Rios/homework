// Coding challenge 8 - Part 2 #4
'use strict';
// -----------------------------------------------
const calcTip = (bill, tip) => {return bill * tip;}, 
      totalCheck = (bill, tip) => {
        const tipRegEx = /\d{1,3}%/;
        return (
            tipRegEx.exec(tip) ?
            bill + calcTip(bill, parseInt(tip.replace('%', '')) / 100, 10) :
            `Please enter a percentage string like '10%' not ${typeof tip} ${tip}`
        );
      },
      calcAverage = (arr) => {
        return arr.reduce((a,b) => a+b, 0) / arr.length;
      },
      randomBills = (bills, billsValues=[]) => {
        for (let bill=0; bill<bills; bill++) {billsValues[bill] = Math.random()*500;}
        return billsValues
      };
// Preset values
const billPercentages = ['5%', '10%', '15%'],
      tests = 20,
      bills = randomBills(tests);
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
