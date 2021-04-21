package Java;

public class Hello {
    public static void main(String[] args) {

        int[] tomb = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        int osszeg = 0;

        for (int i = 0; i < tomb.length; i++) {
            osszeg = osszeg + tomb[i];
        }

        System.out.println(osszeg);

    }

}