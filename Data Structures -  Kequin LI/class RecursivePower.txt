class RecursivePower
{
    public static void main(String[] args) {
        System.out.println(power(2, 5));
    }
    public static double power(double x, int pow)
    {
        if(pow == 0)//base 1
            return 1;
        else if(pow > 0)// general 1
            return x * power(x, (pow - 1));
        else // general 2
            return 1 / power(x, -pow);
    }
}

class RecursivePrinting
{
    public static void main(String[] args) {
        writeVertical(12345);
    }
    public static void writeVertical(int x)
    {
        if(x >= 0 && x <= 9)
            System.out.println(x);
            
        else if(x >= 10)
        {
            writeVertical(x / 10);
            System.out.println(x % 10);
        }
        
        else
        {
            System.out.println('-');
            writeVertical(-x);
        }
    }
}

class RecursivePrintingReverse
{
    public static void main(String[] args) {
        writeVertical(12345);
    }
    public static void writeVertical(int x)
    {
        if(n == 0 && x < 10)
            System.out.println(x);
        else 
        {
            System.out.println(x % 10);
            writeVertical(x / 10); 
        }
    }
}
