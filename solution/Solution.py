# Solution in PY
from json import loads
from sys import stdin
from typing import List


class Solution:
    def lemonadeChange(self, bills: List[int]) -> bool:
        # Initialize counters for $5 and $10 bills
        five, ten = 0, 0
        
        # Iterate through each bill in the input list
        for bill in bills:
            # If the bill is $5, increment the $5 counter
            if bill == 5:
                five += 1
            # If the bill is $10, increment the $10 counter and decrement the $5 counter
            elif bill == 10:
                ten += 1
                five -= 1
            # If the bill is $20, try to make change using available bills
            else:
                # If we have at least one $10 bill, use it and a $5 bill to make change
                if ten > 0:
                    ten -= 1
                    five -= 1
                # If we don't have any $10 bills, we need three $5 bills to make change
                else:
                    five -= 3
            # Check if we have enough $5 bills to make change
            if five < 0:
                # If we don't have enough $5 bills, return "false"
                return "false"
        # If we made it through all the bills without returning "false", return "true"
        return "true"

# Create an instance of the Solution class
s = Solution()

# Open the output file in write mode
with open('user.out', 'w') as f:
    # Iterate through each input case from the standard input
    for case in map(loads, stdin):
        # Call the lemonadeChange method on the input case and write the result to the output file as a string
        f.write(f"{s.lemonadeChange(case)}\n")

# Exit the program with a status code of 0
exit(0)