// Solution in SWIFT
class Solution {
    func lemonadeChange(_ bills: [Int]) -> Bool {
        // Initialize counters for $5 and $10 bills
        var fiveCount = 0
        var tenCount = 0

        // Iterate through each bill in the array
        for i in 0..<bills.count {
            // Check the type of bill
            if bills[i] == 5 {
                // If the bill is $5, increment the $5 counter
                fiveCount += 1
            } else if bills[i] == 10 {
                // If the bill is $10, check if we have a $5 bill to make change
                if fiveCount > 0 {
                    // Decrement the $5 counter and increment the $10 counter
                    fiveCount -= 1
                    tenCount += 1
                } else {
                    // If we don't have a $5 bill, return false
                    return false
                }
            } else {
                // If the bill is $20, try to make change with $10 and $5 bills
                if fiveCount > 0 && tenCount > 0 {
                    // Use a $10 bill and a $5 bill
                    fiveCount -= 1
                    tenCount -= 1
                } else if fiveCount >= 3 {
                    // Use three $5 bills
                    fiveCount -= 3
                } else {
                    // If we can't make change, return false
                    return false
                }
            }
        }

        // If we made it through the entire array without returning false, return true
        return true
    }
}