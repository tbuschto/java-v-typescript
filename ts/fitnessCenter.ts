// Import all mammals:
import * as mammals from "./mammals";

let peter: mammals.Human = new mammals.Human();
let waldo: mammals.Dog  = new mammals.Dog();
let flipper: mammals.Dolphin  = new mammals.Dolphin();

peter.talk();
waldo.talk();
flipper.talk();

/*
function train(customer: Mammal) {
  if (customer instanceof Human) {
    let human: Human = customer as Human;
    human.run(3000);
    human.lift(10);
  } else if (customer instanceof Dog) {
    let dog: Dog = customer as Dog;
    dog.run(2000);
    dog.swim(300);
  } else if (customer instanceof Dolphin) {
    let dolphin: Dolphin = customer as Dolphin;
    dolphin.swim(300);
  }
}
*/
