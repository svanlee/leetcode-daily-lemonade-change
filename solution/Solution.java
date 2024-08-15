// Solution in JAVA
class Solution {
    public boolean lemonadeChange(int[] bills) {
        // Initialize counters for $5 and $10 bills
        int five = 0, ten = 0;
        
        // Iterate through each bill in the input array
        for (int bill : bills) {
            // If the bill is $5, increment the $5 counter
            if (bill == 5) {
                five++;
            } 
            // If the bill is $10, try to make change using a $5 bill
            else if (bill == 10) {
                // If we don't have any $5 bills, return false
                if (five < 1) {
                    return false;
                }
                // Decrement the $5 counter and increment the $10 counter
                five--;
                ten++;
            } 
            // If the bill is $20, try to make change using available bills
            else {
                // If we have at least one $10 bill and one $5 bill, use them to make change
                if (ten > 0 && five > 0) {
                    ten--;
                    five--;
                } 
                // If we don't have any $10 bills, we need three $5 bills to make change
                else if (five > 2) {
                    five -= 3;
                } 
                // If we can't make change, return false
                else {
                    return false;
                }
            }
        }
        
        // If we can make change for all bills, return true
        return true;
    }
}