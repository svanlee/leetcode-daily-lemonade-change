// Solution in JS
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    // Initialize counters for $5 and $10 bills
    let fives = 0; // count of $5 bills
    let tens = 0; // count of $10 bills
    
    // Iterate through each bill in the input array
    for (let i = 0; i < bills.length; i++) {
        // If the bill is $5
        if (bills[i] === 5) {
            // Increment the $5 bill count
            fives++;
        } 
        // If the bill is $10
        else if (bills[i] === 10) {
            // If we have at least 1 $5 bill, use it to make change
            if (fives) {
                fives--; // decrement $5 bill count
                tens++; // increment $10 bill count
            } else {
                // If we don't have any $5 bills to make change, return false
                return false;
            }
        } 
        // If the bill is $20
        else {
            // If we have at least 1 $5 bill and 1 $10 bill, use them to make change
            if (fives >= 1 && tens >= 1) {
                fives--; // decrement $5 bill count
                tens--; // decrement $10 bill count
            } 
            // If we have at least 3 $5 bills, use them to make change
            else if (fives >= 3) {
                fives = fives - 3; // decrement $5 bill count by 3
            } else {
                // If we can't make change, return false
                return false;
            }
        }
    }
    
    // If we can make change for all bills, return true
    return true;
};