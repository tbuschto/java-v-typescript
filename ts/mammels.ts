export abstract class Mammel {

  public abstract talk(): void;

}

export class Human extends Mammel {

  public talk() {
    console.log("Hello!");
  }

  public run(meters: number) {
    console.log("Human is running " + meters + " meters");
  }

  public lift(kg: number) {
    console.log("Human is lifting " + kg + " kg");
  }

}

export class Dog extends Mammel {

  public talk() {
    console.log("Woof!");
  }

  public run(meters: number) {
    console.log("Dog is running " + meters + " meters");
  }

  public swim(meters: number) {
    console.log("Dog is swimming " + meters + " meters");
  }

}

export class Dolphin extends Mammel {

  public talk() {
    console.log("Blubb!");
  }

  public swim(meters: number) {
    console.log("Dolphin is Swimming " + meters + " meters");
  }

}
