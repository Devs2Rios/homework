/*
Your tasks:
1. Re-createChallenge #1, but this time using an ES6class(call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h(but converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create an ew car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h GOOD LUCK 😀
*/

class CarCL {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/hr`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/hr`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const ford = new CarCL('Ford', 120);
console.log(ford.speedUS); // 75
ford.accelerate(); // Ford is going at 130 km/hr
ford.accelerate(); // Ford is going at 140 km/hr
ford.brake(); // Ford is going at 135 km/hr
ford.speedUS = 50;
console.log(ford); // CarCL { make: 'Ford', speed: 80 }
