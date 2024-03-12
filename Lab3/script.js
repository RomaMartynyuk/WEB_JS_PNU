//1.2.3
let car1 = new Object();
car1.color = "red";
car1.maxSpeed = 250;

car1.driver = new Object();
car1.driver.name = "Roman";
car1.driver.category = "C";
let personalLimitation = "personal limitation";
car1.driver.personalLimitation = "No driving at night";

car1.tuning = true;
let numOfAccidents = "number of accidents";
car1.numOfAccidents = 0;
console.log(car1);

//1.2.5
car1.drive = function(){
    console.log("I am not driving at night");
}
car1.drive();

//1.2.4
let car2 = {
    color: "black",
    maxSpeed: 300,
    driver: {
        name: "Artem",
        category: "B",
        "personal limitations": null
    },
    tuning: false,
    "number of accidents": 2,
    //1.2.6
    drive: function(){
        console.log("I can drive anytime");
    }
};
console.log(car2);
car2.drive();

//1.2.7
function Truck(color, weight, avgSpeed, brand, model){
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

let truck1 = new Truck("Yellow", 3000, 40, "DAF", "XF");
console.log(truck1);

//1.2.8
Truck.prototype.AssignDriver = function(name, nightDriving, experience){
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

truck1.AssignDriver("Roman Martyniuk", true, 3);
console.log(truck1);

//1.2.9
Truck.prototype.trip = function(){
    if(!this.driver)
        console.log("No driver assigned");
    else{
        console.log("Driver " + this.driver.name);
        if(this.driver.nightDriving)
            console.log("Drives at night");
        else
            console.log("does not drive at night");
        console.log("And has " + this.driver.experience + " years of experience");
    }
}
truck1.trip();

let truckWithoutDriver = new Truck("Red", 4500, 80, "Renault", "T");
console.log(truckWithoutDriver);
truckWithoutDriver.trip();

//1.2.10
truck1.trip();
let dayDriverTruck = new Truck("White", 5000, 45, "Mack", "Anthem");
dayDriverTruck.AssignDriver("Artem Izmailov", false, 7);
console.log(dayDriverTruck);
dayDriverTruck.trip();

//1.2.12
class Square {
    constructor(a){
        this.a = a;
    }

    //1.2.14
    static help() {
        console.log("Квадрат - це геометрична фігура з чотирма рівними сторонами та чотирма прямими кутами.");
    }

    //1.2.15
    length() {
        console.log("Cума довжин сторін геометричної фігури-чотирикутника: " + this.a * 4);
    }

    square(){
        console.log("Площа геометричної фігури-чотирикутника: " + Math.pow(this.a, 2));
    }

    info(){
        console.log("Довжина всіх сторін: " + this.a);
        console.log("Величина кутів = 90");
        this.length();
        this.square();
    }

     
}

//1.2.16
class Rectangle extends Square {
    //1.2.17
    constructor(a, b){
        super(a);
        this.b = b;
    }

    static help(){
        console.log("Прямоку́тник — це чотирикутник, усі кути якого прямі.");
    }

    length(){
        console.log("Cума довжин сторін геометричної фігури-чотирикутника: " + (this.a * 2 + this.b * 2));
    }

    square(){
        console.log("Площа геометричної фігури-чотирикутника: " + (this.a * this.b));
    }
    
    info(){
        console.log("Довжина сторін прямокутника: " + this.a + "\nШирина сторін прямокутника: " + this.b);
        console.log("Величина кутів = 90");
        this.length();
        this.square();
    }

    //1.2.22
    getA(){
        return this.a;
    }

    getB(){
        return this.b;
    }

    setA(a){
        this.a = a;
    }

    set(b){
        this.b = b;
    }
}

//1.2.18
class Rhombus extends Square {
    //1.2.19
    constructor(a, alpha, beta){
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help(){
        console.log("Ромб — це паралелограм, у якого всі сторони рівні.");
    }

    length(){
        super.length();
    }

    square(){
        console.log("Площа ромба: " + Math.pow(this.a, 2) * Math.sin(this.alpha * Math.PI / 180));
    }

    info(){
        console.log("Довжина сторін ромба: " + this.a);
        console.log("Величина тупого кота: " + this.alpha + "\nВеличина гострого кута: " + this.beta);
        this.length();
        this.square();
    }
}

//1.2.20
class Parallelogram extends Rhombus {
    //1.2.21
    constructor(a, b, alpha, beta){
        super(a, alpha, beta);
        this.b = b;
    }

    static help(){
        console.log("Паралелограм — чотирикутник, протилежні сторони якого попарно паралельні, тобто лежать на паралельних прямих.");
    }

    length(){
        console.log("Cума довжин сторін геометричної фігури-чотирикутника: " + (this.a * 2 + this.b * 2));
    }

    square(){
        console.log("Площа паралелограма: " + this.a * Math.sin(this.alpha * Math.PI / 180) * this.b);
    }

    info(){
        console.log("Довжина сторін паралелограма: " + this.a + "\nШирина сторін паралелограма: " + this.b);
        console.log("Величина тупого кота: " + this.alpha + "\nВеличина гострого кута: " + this.beta);
        this.length();
        this.square();
    }
}

//1.2.23
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

//1.2.24
let sq = new Square(5);
sq.info();

let rect = new Rectangle(8, 9);
rect.info();

let romb = new Rhombus(7, 34, 63);
romb.info();

let paral = new Parallelogram(3, 9, 70, 35);
paral.info();

//1.2.25
function Triangular(a = 3, b = 4, c = 5){
    return {a, b, c};
}

//1.2.26
let {a, b, c} = Triangular(7, 6, 12);
let defaultTriangular = Triangular();
let rightTriangular = Triangular(7, 7, 7);

//1.2.27
function PiMultiplier(a) {
    let resultFunction = function (){
        return Math.PI * a;
    }; 
    return resultFunction;
}

//1.2.28
let firstFunction = PiMultiplier(2);
let secondFunction = PiMultiplier(2/3);
let thirdFunction = PiMultiplier(1/2);

console.log(firstFunction() + "\n" + secondFunction() + "\n" + thirdFunction());

//1.2.29
function Painter(color){
    let paintFunction = function(object) {
        if(object.hasOwnProperty('type')){
            console.log(`Paint object of ${object.type} to the color ${color}`);
        } else {
            console.log(`No 'type' property occurred!).`)
        }
    }
    return paintFunction;
}

//1.2.30
let PaintBlue = Painter("blue");
let PaintRed = Painter("red");
let PaintYellow = Painter("yellow");

//1.2.31
let object1 = {
    maxSpeed: 280,
    type: "Sportcar",
    color: "magenta"
};

let object2 = {
    type: "Truck",
    avgSpeed: 90,
    loadCapacity: 2400
};

let object3 = {
    maxSpeed: 180,
    color: "purple",
    isCar: true
};

PaintBlue(object1);
PaintRed(object2);
PaintYellow(object3);