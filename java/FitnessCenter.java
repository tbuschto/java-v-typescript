public class FitnessCenter {

  public static void main(String[] args) {
    Customers.Human peter = new Customers.Human();
    Customers.Dog waldo = new Customers.Dog();
    System.out.println("Training Peter:");
    train(peter);
    System.out.println("Training Waldo");
    train(waldo);
  }

  public static void train(Object customer) {
    if (customer instanceof Customers.Human) {
      Customers.Human human = (Customers.Human)customer;
      human.run(3000);
      human.lift(10);
    } else if (customer instanceof Customers.Dog) {
      Customers.Dog dog = (Customers.Dog)customer;
      dog.run(2000);
      dog.swim(300);
    }

  }

}
