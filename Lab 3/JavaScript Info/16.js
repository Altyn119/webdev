// Constructor, operator "new"

//Two functions – one object
let obj = new Object;
function A() {obj}
function B() {obj}

let a = new A();
let b = new B();

alert( new A() == new B() );

//Create new Calculator
function Calculator() {
    this.read = function() {
        this.a = prompt('a', 0);
        this.b = prompt('b', 0);
    };
    this.sum = function() {
        return this.a + this.b;
    }
    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();
  
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//Create new Accumulator
function Accumulator(val) {
    this.value = val;
    this.read = function() {
        this.value += prompt('Write a number', 0);
    };
}
  
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);