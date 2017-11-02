export default class Pet {

  public name: string;

  public setName(name: string): void {
    console.log("Your pet has a new Name: " + name);
    this.name = name;
  }

  public getName(): string {
    return name;
  }

}
