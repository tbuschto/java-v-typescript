import Customer from "./Customer";
//??

let peter: customers.Human = new customers.Human();
let waldo: customers.Dog  = new customers.Dog();
console.log("Training Peter:");
train(peter);
console.log("Training Waldo");
train(waldo);

function train(customer: Customer) {
  if (customer instanceof customers.Human) {
    let human: customers.Human = customer as customers.Human;
    human.run(3000);
    human.lift(10);
  } else if (customer instanceof customers.Dog) {
    let dog: customers.Dog = customer as customers.Dog;
    dog.run(2000);
    dog.swim(300);
  }
}
