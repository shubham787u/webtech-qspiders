
// //Random===Quetion
// import java.util.Scanner;
// public class PatternBased{
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         System.out.println("Enter the Rows :");
//         int n= sc.nextInt();
//         printPattern(n);
//     }
//     public static void printPattern(int n) {
//         for(int i=1; i<=n; i++){
//             for(int j=1; j<=n; j++){
//                 if(i+j >= n+1)
//                     System.out.print("* ");
//                 else
//                     System.out.print("  ");
//             }
//             System.out.println();
//         }
        
//     }
// }






// //16)===
// import java.util.Scanner;
// public class PatternBased{
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         System.out.println("Enter the Rows :");
//         int n= sc.nextInt();
//         printPattern(n);
//     }
//     public static void printPattern(int n) {
//         for(int i=1; i<=n; i++){
//             for(int j=1; j<=n; j++){
//                 if(i<=j)
//                     System.out.print("* ");
//                 else
//                     System.out.print("  ");
//             }
//             System.out.println();
//         }
        
//     }
// }




// //15)==
// import java.util.Scanner;
// public class PatternBased{
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         System.out.println("Enter the Rows :");
//         int n= sc.nextInt();
//         printPattern(n);
//     }
//     public static void printPattern(int n) {
//         for(int i=1; i<=n; i++){
//             for(int j=1; j<=n; j++){
//                 if(i+j >= n+1)
//                     System.out.print("* ");
//                 else
//                     System.out.print("  ");
//             }
//             System.out.println();
//         }
        
//     }
// }




// //14)==
// import java.util.Scanner;
// public class PatternBased{
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         System.out.println("Enter the Rows :");
//         int n= sc.nextInt();
//         printPattern(n);
//     }
//     public static void printPattern(int n) {
//         for(int i=1; i<=n; i++){
//             for(int j=1; j<=n; j++){
//                 if(i+j <= n+1)
//                     System.out.print("* ");
//                 else
//                     System.out.print("  ");
//             }
//             System.out.println();
//         }
        
//     }
// }







// //13)===
// import java.util.Scanner;
// public class PatternBased{
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         System.out.println("Enter the Rows :");
//         int n= sc.nextInt();
//         printPattern(n);
//     }
//     public static void printPattern(int n) {
//         for(int i=1; i<=n; i++){
//             for(int j=1; j<=n; j++){
//                 if(i>=j)
//                     System.out.print("* ");
//                 else
//                     System.out.print("  ");
//             }
//             System.out.println();
//         }
        
//     }
// }





// //12)===========
// import java.util.Scanner;
// public class PatternBased{
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         System.out.println("Enter the Rows :");
//         int n= sc.nextInt();
//         printPattern(n);
//     }
//     public static void printPattern(int n) {
//         if(n%2==0){
//             System.out.println("Pattern is NOT possible for Even Rows");
//             return;
//         }
//         int mid=n/2+1;
//         for(int i=1; i<=n; i++){
//             for(int j=1; j<=n; j++){
//                 if(i==1 && j>=mid || j==n && i>mid || i==n && j<mid || j==1 && i<mid || i==mid || j==mid)
//                     System.out.print("* ");
//                 else
//                     System.out.print("  ");
//             }
//             System.out.println();
//         }
        
//     }
// }







//11)==============
// import java.util.Scanner;
// public class PatternBased{
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         System.out.println("Enter the Rows :");
//         int n= sc.nextInt();
//         printPattern(n);
//     }
//     public static void printPattern(int n) {
//         if(n%2==0){
//             System.out.println("Pattern is NOT possible for Even Rows");
//             return;
//         }
//         int mid=n/2+1;
//         for(int i=1; i<=n; i++){
//             for(int j=1; j<=n; j++){
//                 if(i==1 || i==n || j==1 || j==n || i==mid || j==mid ||i==j || i+j==n+1)
//                     System.out.print("* ");
//                 else
//                     System.out.print("  ");
//             }
//             System.out.println();
//         }
        
//     }
// }





// import java.util.Scanner;
// public class PatternBased{
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         System.out.println("Enter the Rows :");
//         int n= sc.nextInt();
//         printPattern(n);
//     }
//     public static void printPattern(int n) {
//         if(n%2==0){
//             System.out.println("Pattern is NOT possible for Even Rows");
//             return;
//         }
//         int mid=n/2+1;
//         for(int i=1; i<=n; i++){
//             for(int j=1; j<=n; j++){
//                 if(i==mid || j==mid)
//                     System.out.print("* ");
//                 else
//                     System.out.print("  ");
//             }
//             System.out.println();
//         }
        
//     }
// }



// //8)================
// public class PatternBased{
//     public static void main(String[] args) {
//         Scanner sc=new Scanner(System.in);
//         System.out.println("Enter the Row : ");
//         int n=sc.nextInt();
//         printPattern(n);
//     }
//     public static void printPattern(int n){
//         for(int i=1; i<=n; i++){
//             for(int j=1; j<=n; j++){
//                 if(i==j || i+j==n+1)
//                     System.out.print("* ");
//                 else
//                     System.out.print("  ");
//             }
//             System.out.println();
//         }
//     }

// }



// import java.util.Scanner;
// public class PatternBased{
//     public static void main(String[] args) {
//         Scanner sc= new Scanner(System.in);
//         System.out.println("Enter the Rows : ");
//         int n=sc.nextInt();
//         printPattern(n);
//     }
//     public static void printPattern(int n) {
//         for(int i=1; i<=n; i++){
//             for(int j=1; j<=n; j++){
//                 System.out.print("("+i+","+j+")\t");
//             }
//             System.out.println();
//         }
//     }
// }



// import java.util.Scanner;
// public class PatternBased{
//     public static void main(String[] args) {
//         Scanner sc=new Scanner(System.in);
//         System.out.print("Enter The Rows :");
//         int n=sc.nextInt();
//         printPattern(n);
//     }
//     public static void printPattern(int n){
//         for(int i=1;  i<=n; i++){
//             for(int j=1; j<=n; j++){
//                 if(i==1||i==2||i==n||i==n-1 || j==1 ||j==2||j==n ||j==n-1)
//                     System.out.print("* ");
//                 else
//                     System.out.print("  ");
//             }
//             System.out.println();
//         }
//     }
// }



// import java.util.Scanner;
// public class PatternBased{
//     public static void main(String[] args) {
//         Scanner sc=new Scanner(System.in);
//         System.out.println("Enter the Rows : ");
//         int n=sc.nextInt();
//         printPattern(n);
//     }
//     public static void printPattern(int n){
//         for(int i=1; i<=n; i++){
//             for(int j=1; j<=n; j++){
//                 if(i==1 || i==2 || i==n || i==n-1 || j==1 || j==2 || j==n || j==n-1)
//                     System.out.print("* ");
//                 else
//                     System.out.print("  ");
//             }
//             System.out.println();
//         }
//     }
// }








// import java.util.Scanner;
// public class PatternBased {
//         public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         System.out.println("Enter The Rows : ");
//         int n=sc.nextInt();
//         printPattern(n);
//         }
//         public static void printPattern(int n){
//         for (int i=1; i<=n; i++){
//             for (int j=1; j<=n; j++){
//                 if(i==1 || i==n || j==1 || j==n)
//                     System.out.print("* ");
//             else 
//                 System.out.print("  ");
//             }
//             System.out.println();
//         }
//     }

// }




    // public static void main(String[] args) {
    //     int n=5;
    //     for (int i=1; i<=n; i++){
    //         for (int j=1; j<=n; j++){
    //             if(i==1 || i==n || j==1 || j==n)
    //                 System.out.print("*  ");
    //         else 
    //             System.out.print("   ");
    //         }
    //         System.out.println();
    //     }
    // }

