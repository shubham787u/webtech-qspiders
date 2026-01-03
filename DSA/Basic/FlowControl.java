public class FlowControl {   
    public static void main(String[] args) {

        //9)--
        int price=100000;
        if (price>=10000) {
            System.out.println("40% Discount");           
        }else if (price>=6000){
            System.out.println("30% Discount");
        }else if (price>=3000){
            System.out.println("20% Discount");
        }else if(price>=1){
            System.out.println("8% Discount");
        }else{
            System.out.println("No Discount");
        }


        // //7)---
        // int year =2028;
        // if (( year%100 !=0 && year%4==0) || (year%400==0)) {
        //     System.out.println("Leap year");
        // }else{
        //     System.out.println("Not a leap year");
        // }



        // //5)-->
        // int a=10;
        // int b=8;
        // int c=3;
        // if (a+b>c && b+c>a && c+a>b) {
        //     System.out.println("valid triangle");
        // }else{
        //     System.out.println("Not a valid triangle");
        // }


        // //4)--
        // int a=60;
        // int b=60;
        // int c=60;
        // if(a>0 && b>0 && c>0 && (a+b+c == 180)){
        //     System.out.println("valid triangle");
        // }else{
        //     System.out.println("Not a Valid triangle");
        // }



        // //3)--
        // char ch = 'J';
        // if((ch >='A' && ch <='Z') || (ch >='a' && ch <='z')){
        //     System.out.println("Is alphabet :"+ ch);
        // }else{
        //     System.out.println("Not alphabet :"+ ch);
        // }






        //6)--WAP to take three sides of a tringle and print it is equilateral, isosceles or scalene triangle or not using if else statement
            // int a=10;
            // int b=10;
            // int c=20;
            // if(a+b>c && a+c>b && b+c>a){
            //     if(a==b && a==c){
            //     System.out.println("It is equilateral");//All three side are equal
            //     }else{
            //         System.out.println("It is isosceles");
            //     }
            // } else {
            //     System.out.println("It is scalene"); 
            // }


        // //2)--WAP to print all are equal if all have same value or print biggest value of three numbers using if else statment 
        // int a=20;
        // int b=30;
        // int c=40;
        // if(a==b && a==c){
        //     System.out.println("All are same with value:" +a);
        // }else if (a>b && a>c){
        //     System.out.println("The biggest value is:" +a);
        // } else if(b>c){
        //     System.out.println("The  biggest value is:" +b);
        // } else {
        //     System.out.println("The biggest value is :" +c);
        // }

       
       
        // //1) WAP to print big of two number using if else statment
        // int a = 30;
        // int b = 20;
        // if(a>b){
        //     System.out.println(a);
        // }else{
        //     System.out.println(b);
        }
    }

