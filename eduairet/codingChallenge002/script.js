// Coding challenge 2

// Functions 
function bodyMassIndex(mass, height) {return mass / height ** 2};
function createParagraph(paragraphContainer, paragraphID, content) {
    const newParagraph = document.createElement('p');
    const paragraphText = document.createTextNode(content);
    newParagraph.appendChild(paragraphText);
    newParagraph.id = paragraphID;
    paragraphContainer.appendChild(newParagraph)
}
// Main elements
tests = {
    pedro: {
        name: "Pedro", mass: 74, height: 1.80
    },
    eduardo: {
        name: "Eduardo", mass: 62, height: 1.65
    }
};
const container = document.getElementById('bmis');
let maxBMI = [0, ''],
    minBMI = [0, ''];
// Mass paragraphs to DOM
for (const test of Object.values(tests)) {
    const testBmi = bodyMassIndex(test.mass, test.height);
    const testText = `${test.name} has a BMI of ${testBmi.toFixed(2)}`;
    createParagraph(container, test.name, testText);
    if (testBmi > maxBMI[0]) {
        maxBMI = [testBmi, test.name];
    } else if (testBmi < maxBMI[0]) {
        minBMI = [testBmi, test.name];
    } else {
        alert('Cannot compare');
    }
}
// Change higher mass paragraph to red
const higherMass = document.getElementById(maxBMI[1]);
higherMass.style.color = 'red';
// Mass compared paragraph
const compareString = `${maxBMI[1]}'s BMI (${maxBMI[0].toFixed(2)}) is higher than ${minBMI[1]}'s BMI (${minBMI[0].toFixed(2)})`;
createParagraph(container, 'compared-bmis', compareString)
console.log(compareString);
