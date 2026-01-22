//============with Patternwidth and Space==========
import java.util.Scanner;

public class Pattern2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Rows :");        
        int n= sc.nextInt();
        printPattern(n);
    }
    public static void printPattern(int n) {
        int space =n-1;
        int patternWidth = 1;
      
        for(int i=1; i<=n; i++){
            for(int j=1; j<=space; j++)
                    System.out.print(" ");
                for(int j=1; j<=patternWidth; j++)
                    System.out.print("*");
                
                space--;
                patternWidth++;
        System.out.println();
        }
    }
}









//==============With PatternWidth==============
// import java.util.Scanner;

// public class Pattern2 {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         System.out.println("Enter the Rows :");        
//         int n= sc.nextInt();
//         printPattern(n);
//     }
//     public static void printPattern(int n) {
//         int patternWidth = 1;
//         int space =n-1;
//         for(int i=1; i<=n; i++){
//             for(int j=1; j<=space; j++)
//                     System.out.print("  ");
//                 for(int j=1; j<=patternWidth; j++)
//                     System.out.print("*   ");
                
//                 space--;
//                 patternWidth++;
//         System.out.println();
//         }
//     }
// }