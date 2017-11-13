public class Customer {

  public static class Dog extends Customer {

    public void run(int meters) {
      System.out.println("Running " + meters + " meters");
    }

    public void swim(int kg) {
      System.out.println("Swimming " + kg + " meters");
    }

  }

  public static class Human extends Customer {

    public void run(int meters) {
      System.out.println("Running " + meters + " meters");
    }

    public void lift(int kg) {
      System.out.println("Lifting " + kg + " kg");
    }

  }

}