package self;

import java.util.Scanner;

public class Determinant
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);

        System.out.println("Please enter the number or rows and cols in your 1st matrix :");
        int rows1 = sc.nextInt();
        int cols1 = sc.nextInt();

        System.out.println("Please enter the number or rows and cols in your 2nd matrix :");
        int rows2 = sc.nextInt();
        int cols2 = sc.nextInt();

        if(rows1 != cols2 || rows2 != cols1)
            System.out.println("Determinant cannot be calculated!");
        else
        {
            int arr1[][] = new int[rows1][cols1];
            int arr2[][] = new int[rows2][cols2];

            int i = 1;
            int rowD = 0;
            int colD = 0;
            int arr[][] = null;

            if(i == 1)
            {
                rowD = rows1;
                colD = cols1;
                arr= arr1;
            }
            else
            {
                rowD = rows2;
                colD = cols2;
            }
            while(i >= 0)
            {
                System.out.println("Please enter the elements of matrix " +i + " :");
                for(int row = 0; row < rowD; row++)
                {
                    for(int col = 0; col < colD; col++)
                    {
                        System.out.println("Enter element: ");
                        arr[row][col] = sc.nextInt();
                    }
                    System.out.println();
                }
                i--;
            }


        }
    }
}