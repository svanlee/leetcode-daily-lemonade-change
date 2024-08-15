// Solution in CS
public class Solution
{
    public bool LemonadeChange(int[] bills)
    {
        // Initialize counters for $5 and $10 bills
        int fiveBill = 0; // count of $5 bills
        int tenBill = 0; // count of $10 bills

        // Iterate through each bill in the input array
        foreach (int bill in bills)
        {
            // If the bill is $10
            if (bill == 10)
            {
                // If we don't have any $5 bills to make change, return false
                if (fiveBill == 0)
                {
                    return false;
                }
                else
                {
                    // Decrement the $5 bill count and increment the $10 bill count
                    fiveBill--;
                    tenBill++;
                }
            }
            // If the bill is $20
            else if (bill == 20)
            {
                // If we have at least 3 $5 bills and no $10 bills, use 3 $5 bills to make change
                if (fiveBill >= 3 && tenBill == 0)
                {
                    fiveBill -= 3;
                }
                // If we have at least 1 $5 bill and 1 $10 bill, use them to make change
                else if (fiveBill > 0 && tenBill > 0)
                {
                    fiveBill--;
                    tenBill--;
                }
                else
                {
                    // If we can't make change, return false
                    return false;
                }
            }
            // If the bill is $5
            else
            {
                // Increment the $5 bill count
                fiveBill++;
            }
        }

        // If we can make change for all bills, return true
        return true;
    }
}