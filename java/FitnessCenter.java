public class FitnessCenter {

  public static void main(String[] args) {
    Mammal peter = new Mammal.Human();
    Mammal waldo = new Mammal.Dog();
    Mammal flipper = new Mammal.Dolphin();

    peter.talk();
    waldo.talk();
    flipper.talk();
  }

  /*
  public static void train(Mammal customer) {
    if (customer instanceof Mammal.Human) {
      Mammal.Human human = (Mammal.Human)customer;
      human.run(3000);
      human.lift(10);
    } else if (customer instanceof Mammal.Dog) {
      Mammal.Dog dog = (Mammal.Dog)customer;
      dog.run(2000);
      dog.swim(300);
    } else if (customer instanceof Mammal.Dolphin) {
      Mammal.Dolphin dolphin = (Mammal.Dolphin)customer;
      dolphin.swim(300);
    }
  }
  */

}
