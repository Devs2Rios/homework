// Coding challenge 4

function totalCheck(bill, tip) {
    function calcTip (bill, tip) {
        return bill * tip;
    } 
    const tipRegEx = /\d{1,3}%/;
    if (tipRegEx.exec(tip)) {
        const percentage = parseInt(tip.replace('%', '')) / 100;
        return bill + calcTip(bill, percentage);
    } else {
        return `Please enter a percentage string like 10% not ${typeof tip} ${tip}`;
    }
};

function calcAverage(arr) {return arr.reduce((a,b) => a+b, 0) / arr.length;};

let bills = [251, 35, 118, 100, 336, 340, 26, 156, 364, 349];
let billPercentages = ['5%', '10%', '15%'];
let tipsTotals = [];

for (const bill of bills) {
    const randomTip = billPercentages[Math.round(Math.random() * (billPercentages.length - 1))];
    tipsTotals.push({tip: randomTip, total: totalCheck(bill,randomTip)});
}

const totals = tipsTotals.map(tipTotal => tipTotal.total);

// Console results
console.log(tipsTotals);
console.log(totals);
console.log(`The totals average is $${calcAverage(totals).toFixed(2)}`);
