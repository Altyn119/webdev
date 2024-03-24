// Object methods, "this"

//Create a calculator
let calculator = {
    read(){
        this.a = prompt('a', 0);
        this.b = prompt('b', 0);
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// Chaining
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
};
ladder.up().up().down().showStep().down().showStep();
