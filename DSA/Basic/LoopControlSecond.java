public class LoopControlSecond {
    public static int getSum(int n){
        int sum =0;
        int i = 1;
        while(i<=n){
            sum = sum+i;
            i++;
        }
        return sum;
    }
    public static void main(String[] args) {
        int n = 90;
        int sum = getSum(n);
        System.out.println(sum);
    }
}
