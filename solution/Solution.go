// Solution in GO
func lemonadeChange(bills []int) bool {
    // Create a map to store the count of each type of bill
    cash := make(map[int]int)

    // Iterate through each bill in the array
    for _, bill := range bills {
        // Increment the count of the current bill
        cash[bill]++

        // If the bill is $5, we don't need to make change, so continue
        if bill == 5 {
            continue
        }

        // If the bill is $10, try to make change with a $5 bill
        if bill == 10 && cash[5] > 0 {
            // Decrement the count of $5 bills
            cash[5]--
            continue
        }

        // If the bill is $20, try to make change with a $10 bill and a $5 bill
        if bill == 20 && cash[10] > 0 && cash[5] > 0 {
            // Decrement the count of $10 bills and $5 bills
            cash[10]--
            cash[5]--
            continue
        }

        // If the bill is $20 and we don't have a $10 bill, try to make change with three $5 bills
        if bill == 20 && cash[5] > 2 {
            // Decrement the count of $5 bills by 3
            cash[5] -= 3
            continue
        }

        // If we can't make change for the current bill, return false
        return false
    }

    // If we made it through the entire array without returning false, return true
    return true
}