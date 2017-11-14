public abstract class Mammel {

  public abstract void talk();

  // Nested classes:

  public static class Human extends Mammel {

    public void talk() {
      System.out.println("Hello!");
    }

    public void run(int meters) {
      System.out.println("Human is running " + meters + " meters");
    }

    public void lift(int kg) {
      System.out.println("Human is lifting " + kg + " kg");
    }

  }

  public static class Dog extends Mammel {

    public void talk() {
      System.out.println("Woof!");
    }

    public void run(int meters) {
      System.out.println("Dog is running " + meters + " meters");
    }

    public void swim(int kg) {
      System.out.println("Dog is swimming " + kg + " meters");
    }

  }

  public static class Dolphin extends Mammel {

    public void talk() {
      System.out.println("Blubb!");
    }

    public void swim(int kg) {
      System.out.println("Doplhin is swimming " + kg + " meters");
    }

  }

}