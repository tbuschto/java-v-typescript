public class FitnessCenter {

  public static void main(String[] args) {
    Mammel peter = new Mammel.Human();
    Mammel waldo = new Mammel.Dog();
    Mammel flipper = new Mammel.Dolphin();

    peter.talk();
    waldo.talk();
    flipper.talk();
  }

  /*
  public static void train(Mammel customer) {
    if (customer instanceof Mammel.Human) {
      Mammel.Human human = (Mammel.Human)customer;
      human.run(3000);
      human.lift(10);
    } else if (customer instanceof Mammel.Dog) {
      Mammel.Dog dog = (Mammel.Dog)customer;
      dog.run(2000);
      dog.swim(300);
    } else if (customer instanceof Mammel.Dolphin) {
      Mammel.Dolphin dolphin = (Mammel.Dolphin)customer;
      dolphin.swim(300);
    }
  }
  */

}
