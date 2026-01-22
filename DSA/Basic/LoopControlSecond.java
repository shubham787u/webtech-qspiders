public class LoopControlSecond {
//3)===>>
            public static int getSum(int n){
            int sum =0;
            int i =1;
            while(i<=n){
                sum=sum + i*i;
                i++;
            }
            return sum;
        }
        public static void main(String[] args){
            int n =100;
            int sum = getSum(n);
            System.out.println(sum);
        }




//2)===>>
        // public static int getEvenSum(int n){
        //     int sum =0;
        //     int i =2;
        //     while(i<=n){
        //         if(i%2==0)
        //         sum=sum + i;
        //         i++;
        //     }
        //     return sum;
        // }
        // public static void main(String[] args){
        //     int n =10;
        //     int sum = getEvenSum(n);
        //     System.out.println(sum);
        // }

//1)======>>>>
    //  public static int getSum(int n){
    //     int sum =0;
    //     int i = 1;
    //      while(i<=n) {
    //         sum = sum + i;
    //         i++;
    //     }
    //     return sum;
    //  }
    //  public static void main(String[] args) {
    //     int n = 90;
    //      int sum = getSum(n);
    //      System.out.println(sum);
    // }

}
