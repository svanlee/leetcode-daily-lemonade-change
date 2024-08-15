// Solution in TS
function lemonadeChange(bills: number[]): boolean {
    // Initialize a register to keep track of the number of bills of each denomination
    // The indices represent the denominations: 0=$0, 1=$5, 2=$10, 3=$15, 4=$20
    const register = [0, 0, 0, 0, 0];

    // Iterate through each bill in the input array
    for (let bill of bills) {
        // Increment the count of the corresponding denomination in the register
        ++register[bill / 5];

        // If the bill is $5, we don't need to make change, so continue to the next bill
        if (bill == 5) {
            continue;
        }

        // Subtract $5 from the bill to make change
        bill -= 5;

        // If the remaining amount is $15 and we have at least one $10 bill, use it to make change
        if (bill == 15 && register[2] > 0) {
            --register[2]; // decrement the count of $10 bills
            bill -= 10; // subtract $10 from the remaining amount
        }

        // Calculate the number of $5 bills required to make change for the remaining amount
        const req = bill / 5;

        // If we don't have enough $5 bills to make change, return false
        if (register[1] < req) {
            return false;
        }

        // Subtract the required number of $5 bills from the register
        register[1] -= req;
    }

    // If we can make change for all bills, return true
    return true;
}