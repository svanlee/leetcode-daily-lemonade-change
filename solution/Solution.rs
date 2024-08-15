// Solution in RUST
impl Solution {
    pub fn lemonade_change(bills: Vec<i32>) -> bool {
        // Initialize counters for $5 and $10 bills
        let mut five_count = 0;
        let mut ten_count = 0;

        // Iterate through each bill in the vector
        for &bill in bills.iter() {
            // Check the type of bill
            match bill {
                5 => {
                    // If the bill is $5, increment the $5 counter
                    five_count += 1;
                }
                10 => {
                    // If the bill is $10, check if we have a $5 bill to make change
                    if five_count == 0 {
                        // If we don't have a $5 bill, return false
                        return false;
                    }
                    // Decrement the $5 counter and increment the $10 counter
                    five_count -= 1;
                    ten_count += 1;
                }
                20 => {
                    // If the bill is $20, try to make change with $10 and $5 bills
                    if ten_count > 0 && five_count > 0 {
                        // Use a $10 bill and a $5 bill
                        ten_count -= 1;
                        five_count -= 1;
                    } else if five_count >= 3 {
                        // Use three $5 bills
                        five_count -= 3;
                    } else {
                        // If we can't make change, return false
                        return false;
                    }
                }
                _ => {
                    // If the bill is not $5, $10, or $20, return false
                    return false;
                }
            }
        }

        // If we made it through the entire vector without returning false, return true
        true
    }
}