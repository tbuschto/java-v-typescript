export default class Customer {}

export class Dog extends Customer {

  public run(meters: number) {
    console.log("Running " + meters + " meters");
  }

  public swim(meters: number) {
    console.log("Swimming " + meters + " meters");
  }

}

export class Human extends Customer {

  public run(meters: number) {
    console.log("Running " + meters + " meters");
  }

  public lift(kg: number) {
    console.log("Lifting " + kg + " kg");
  }

}
