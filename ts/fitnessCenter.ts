// Import all mammels:
import * as mammels from "./mammels";

let peter: mammels.Mammel = new mammels.Human();
let waldo: mammels.Mammel  = new mammels.Dog();
let flipper: mammels.Mammel  = new mammels.Dolphin();

peter.talk();
waldo.talk();
flipper.talk();

/*
function train(customer: mammels.Mammel) {
  if (customer instanceof mammels.Human) {
    let human: mammels.Human = customer as mammels.Human;
    human.run(3000);
    human.lift(10);
  } else if (customer instanceof mammels.Dog) {
    let dog: mammels.Dog = customer as mammels.Dog;
    dog.run(2000);
    dog.swim(300);
  } else if (customer instanceof mammels.Dolphin) {
    let dolphin: mammels.Dolphin = customer as mammels.Dolphin;
    dolphin.swim(300);
  }
}
*/
