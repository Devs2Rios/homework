// Coding challenge 1

function bodyMassIndex (mass, height) {return mass / height ** 2};

tests = {
    pedro: {
        name: "Pedro", mass: 74, height: 1.80
    },
    eduardo: {
        name: "Eduardo", mass: 62, height: 1.65
    },
    rodrigo: {
        name: "Rodrigo", mass: 76, height: 1.80
    },
    lalo: {
        name: "Lalo", mass: 86, height: 1.82
    }
};

const container = document.getElementById('bmis');
let maxBMI = [0, ''];
for (const test of Object.values(tests)) {
    const bmiParagraph = document.createElement('p');
    const testBmi = bodyMassIndex(test.mass, test.height);
    const testText = document.createTextNode(`${test.name} has a BMI of ${testBmi.toFixed(2)}`);
    bmiParagraph.appendChild(testText);
    bmiParagraph.id = test.name;
    container.appendChild(bmiParagraph);
    if (testBmi > maxBMI[0]) {
        maxBMI = [testBmi, test.name];
    }
}

const higherMass = document.getElementById(maxBMI[1]);
higherMass.style.color = 'red';
console.log('Higher', maxBMI[0].toFixed(2), maxBMI[1]);
