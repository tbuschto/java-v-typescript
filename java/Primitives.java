public class Primitives {

  public static void main(String[] args) {

    boolean bool = true && false;
    bool = true;
    System.out.println(bool);

    byte b = 0b1010101;
    short s = 0XFFF;
    int i = 2147483647;
    long l = 2147483648L;
    char c = 'a';
    System.out.println(l - b + c + s - i);

    float f = 3.14F;
    double d = Math.PI;
    System.out.println(f * d);

    double nan = Double.NaN;
    double inf = Double.POSITIVE_INFINITY;
    System.out.println(nan + inf);

    String str = "foo" + "bar" + c;
    System.out.println(str == "foobara"); // false??

  }

}
