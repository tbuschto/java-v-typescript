// Import all mammals:
import * as mammals from "./mammals";

let peter: mammals.Mammal = new mammals.Human();
let waldo: mammals.Mammal  = new mammals.Dog();
let flipper: mammals.Mammal  = new mammals.Dolphin();

peter.talk();
waldo.talk();
flipper.talk();

/*
function train(customer: mammals.Mammal) {
  if (customer instanceof mammals.Human) {
    let human: mammals.Human = customer as mammals.Human;
    human.run(3000);
    human.lift(10);
  } else if (customer instanceof mammals.Dog) {
    let dog: mammals.Dog = customer as mammals.Dog;
    dog.run(2000);
    dog.swim(300);
  } else if (customer instanceof mammals.Dolphin) {
    let dolphin: mammals.Dolphin = customer as mammals.Dolphin;
    dolphin.swim(300);
  }
}
*/
