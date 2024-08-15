// Solution in PHP
class Solution {

/**
* @param Integer[] $bills
* @return Boolean
*/
function lemonadeChange($bills) {
// Initialize counters for $5 and $10 bills
$five = 0;
$ten = 0;

// Iterate through each bill in the array
foreach ($bills as $bill) {
// If the bill is $5, increment the $5 counter
if ($bill == 5) {
$five++;
}
// If the bill is $10, increment the $10 counter and decrement the $5 counter
elseif ($bill == 10) {
if ($five < 1) { return false; // Not enough $5 bills to make change } $five--; $ten++; } // If the bill is $20, try to
    make change with $10 and $5 bills elseif ($bill==20) { // If we have at least one $10 bill and one $5 bill, use
    those if ($ten> 0 && $five > 0) {
    $ten--;
    $five--;
    }
    // If we don't have a $10 bill, use three $5 bills
    elseif ($five > 2) {
    $five -= 3;
    }
    // If we can't make change, return false
    else {
    return false;
    }
    }
    }

    // If we made it through the entire array without returning false, return true
    return true;
    }
    }