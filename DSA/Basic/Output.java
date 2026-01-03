

public class Output {
    
    public static void main(String[] args) {
        //19) Test the rank of a student
        int marks =50;
        String result = (marks>=75) ? "Distinction" :(marks>=60) ? "First Class" : (marks>=50) ? "Second Class" : (marks>=35) ? "pass" : "Fail";
        
        System.out.println(result);



      // //20)  Find the Output
      //     int a = 5;
      //     int b = 10;
      //     int c= (a>b) ? a++ : b++;
      //     System.err.println(a+" "+b+" "+c);


      // //21) find Output
      //   int a=3;
      //   int b=4;
      //   int c=5;
      //   int result =(a>b) ? (a>c ? a : c) : (b > c ? b:c);
      //   System.err.println(result);

        // //22) find output
        // int x=10;
        // int y=5;
        // int z = (x>y) ? (x <15 ? x:y) : (x>5 ? y :x);
        // System.out.println(z);



        // //23) find output
        // int x=10;
        // int y=5;
        // int z=7;
        // int result = (x<y) ? (y<z ? z : y) : x;
        // System.out.println(result);

        // //15) print second largest of three distinct no. using ternary operator only,
        // int a=12;
        // int b=8;
        // int c=20;
        // int big=(a>b && a>c) ? a : (b>c ? b : c);
        // int small =(a<b && a<c) ? a : (b<c ? b : c);
        // int secondBig =a+b+c - big - small;
        // System.out.println(secondBig);




        // //13 WAP to print the biggest of three no.,
        //   int a= 3;
        //   int b=5;
        //   int c=10;
        //   // int x= a>b ? a : b;
        //   // int big = x>c ? x : c;
        //   // System.out.println(big);
        //   //or----
        //   int big = (a>b && a>c) ? a :(b>c ? b : c);
        //   System.out.println(big);


        // //10)A character, check if it is uppercase, lowercase,digit or special character.
        //   char u = 'A'-'Z';
        //   char l = 'a'-'z';
        //   char d = '0'-'9';
        //   char c = '@';
        //   String result = c>='A' && c<='Z' ? "UpperCase" : c>='a' && c<='z' ? "lowerCase" : c>='0' && c<='9' ? "digit character" : "special Character";
        //   System.out.println(result);


        // //6)year print true if it is a leap year or print false if it it is not a leap year
        //   int year=2026;
        //   String result =((year%100 != 0 && year%4==0) || year%400==0) ? "Leap year" : "Not a Leap Year";
        //   System.out.println(result);

        // //5) the three sides of a triangle is valid or not
        // int a=3;
        // int b=10;
        // int c=6;
        // String result=(a+b>c && b+c>a && a+c>b) ? "valid" : "Not valid";
        // System.out.println(result);



        // //24- Find-Output
        // int a=1;
        // int b=2;
        // int c=3;
        // int result = a<b ? a<c ? c:a :b;
        // System.out.println(result);

        // //25-find-output
        // int a=5;
        // int b=10;
        // int c=(a>b) ? b++ : (a<b ? --b : b);
        // System.out.println(c);




        // //26-Find-Output
        // int value=10;
        // int result=(value>5) ? (value < 8 ? 1:2) : 3;
        // System.out.println(result);

        // //27- Find-output
        // int x=5;
        // int y=7;
        // int z=3;
        // int result=(x>y) ? (x>z ? x:z) : (y>z ? y:z);
        // System.out.println(result);


      // 28- find-Output only
        // int x=5;
        // int y=7;
        // int z=3;
        // int result=(x<y) ? (x<z ? x:z) : (y<z ? y:z);
        // System.err.println(result);

    }
}
