//40)==
import java.util.Scanner;
public class Pattern3{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Rows :");        
        int n= sc.nextInt();
        printPattern(n);
    }
    int space =n-1;

    int num =1;

    int patternWidth =1;

    for(int i =1; i<=n; i++){

        for(int j=1; j<=space; j++){

        System.out.print(" ");

        for(int j=1; j<=patternWidth; j++)

            System.out.print(num-- + " ");

        num=i+1;
        space--;
        patternWidth++;
        System.out.println();

    }

}

}



// import java.util.Scanner;
// public class Pattern3{
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         System.out.println("Enter the Rows :");        
//         int n= sc.nextInt();
//         printPattern(n);
//     }
//         public static void printPattern(int n) {
//             if(n%2==0){
//                 System.out.println("pattern is not posible");
//                 return;
//             }
//             int sStart = mid;
//             int eStart = mid;
//             int mid =n/2+1;

            
//         }


// import java.util.Scanner;
// public class Pattern3{
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         System.out.println("Enter the Rows :");        
//         int n= sc.nextInt();
//         printPattern(n);
//     }
//     public static void printPattern(int n) {
//         int sStar = 1;
//         int eStar =n;
//         int mid=n/2+1;
//         for(int i=1; i<=n; i++){
//             for(int j=1; j<=n; j++){
//                 if(j<=sStar || j>=eStar)
//                     System.out.print("* ");
//                 else
//                     System.out.print("  ");
//                 }
//                 if(i<mid){
//                     sStar++; eStar--;
//                 }else{
//                     eStar--; sStar++;
//                 }
//         System.out.println();
//         }
//     }
// }








// import java.util.Scanner;
// public class Pattern3{
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         System.out.println("Enter the Rows :");        
//         int n= sc.nextInt();
//         printPattern(n);
//     }
//     public static void printPattern(int n) {
//         int space =0;
//         int patternWidth = n;
//         int mid=n/2+1;
      
//         for(int i=1; i<=n; i++){
//             for(int j=1; j<=space; j++)
//                     System.out.print("  ");
//                 for(int j=1; j<=patternWidth; j++)
//                     System.out.print("* ");

//                 if(i<mid){
//                     space++; patternWidth-=2;
//                 }else{
//                     space--; patternWidth+=2;
//                 }
//         System.out.println();
//         }
//     }
// }






// import java.util.Scanner;
// public class Pattern3{
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         System.out.println("Enter the Rows :");        
//         int n= sc.nextInt();
//         printPattern(n);
//     }
//     public static void printPattern(int n) {
//         int space =n/2;
//         int patternWidth = 1;
//         int mid=n/2+1;
      
//         for(int i=1; i<=n; i++){
//             for(int j=1; j<=space; j++)
//                     System.out.print("  ");
//                 for(int j=1; j<=patternWidth; j++)
//                     System.out.print("* ");

//                 if(i<mid){
//                     space--; patternWidth+=2;
//                 }else{
//                     space++; patternWidth-=2;
//                 }
//         System.out.println();
//         }
//     }
// }





// import java.util.Scanner;
// public class Pattern3{
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         System.out.println("Enter the Rows :");        
//         int n= sc.nextInt();
//         printPattern(n);
//     }
//     public static void printPattern(int n) {
//         int space =n/2;
//         int patternWidth = 1;
//         int mid=n/2+1;
      
//         for(int i=1; i<=n; i++){
//             for(int j=1; j<=space; j++)
//                     System.out.print("  ");
//                 for(int j=1; j<=patternWidth; j++)
//                     System.out.print("* ");

//                 if(i<mid){
//                     space--; patternWidth++;
//                 }else{
//                     space++; patternWidth--;
//                 }
//         System.out.println();
//         }
//     }
// }





// import java.util.Scanner;
// public class Pattern3{
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         System.out.println("Enter the Rows :");        
//         int n= sc.nextInt();
//         printPattern(n);
//     }
//     public static void printPattern(int n) {
//         int space =n/2;
//         int patternWidth = 1;
//         int mid=n/2+1;
      
//         for(int i=1; i<=n; i++){
//             for(int j=1; j<=space; j++)
//                     System.out.print("  ");
//                 for(int j=1; j<=patternWidth; j++)
//                     System.out.print("*   ");

//                 if(i<mid){
//                     space--; patternWidth++;
//                 }else{
//                     space++; patternWidth--;
//                 }
//         System.out.println();
//         }
//     }
// }



// //13)===By Logic=========
// import java.util.Scanner;
// public class Pattern3{
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         System.out.println("Enter the Rows :");        
//         int n= sc.nextInt();
//         printPattern(n);
//     }
//     public static void printPattern(int n) {
//         int space =n-1;
//         int patternWidth = 1;
      
//         for(int i=1; i<=n; i++){
//             for(int j=1; j<=space; j++)
//                     System.out.print(" ");
//                 for(int j=1; j<=patternWidth; j++)
//                     System.out.print("*");
                
//                 space--;
//                 patternWidth++;
//         System.out.println();
//         }
//     }
// }

