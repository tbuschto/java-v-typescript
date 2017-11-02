public class Pet {

  private String name;

  public void setName(String name) {
    System.out.println("Your pet has a new Name: " + name);
    this.name = name;
  }

  public String getName() {
    return name;
  }

}
