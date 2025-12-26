import  java.util.Scanner;

public class TriangleSide {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        //taking user input
        System.out.print("Enter side 1 : ");
        int a = sc.nextInt();
        System.out.println("Enter side 2 : ");
        int b = sc.nextInt();
         System.out.println("Enter side 3 : ");
        int c = sc.nextInt();

        String result =(a+b>c && a+c>b && b+c>a) ? "valid" : "not valid";
        System.out.println(result);

    }
}
