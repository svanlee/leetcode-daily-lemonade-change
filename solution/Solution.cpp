// Solution in CPP
#pragma GCC optimize("Ofast")
// Disable synchronization of C++ streams with C streams and untie cin from cout
static auto _ = []()
{ios::sync_with_stdio(false); cin.tie(nullptr); return nullptr; }();

class Solution
{
public:
    bool lemonadeChange(vector<int> &bills)
    {
        // Get the size of the input vector
        int size = bills.size();

        // Initialize counters for $5 and $10 bills
        int bill5 = 0;
        int bill10 = 0;

        // Iterate through each bill in the input vector
        for (int i = 0; i < size; i++)
        {
            int bill = bills[i];

            // If the bill is $20, try to make change using available bills
            if (bill == 20)
            {
                // If we have at least one $10 bill, use it and a $5 bill to make change
                if (bill10 > 0)
                {
                    bill5 -= 1;
                    bill10 -= 1;
                    // Check if we have enough $5 bills and $10 bills to make change
                    if (bill5 < 0)
                        break;
                    if (bill10 < 0)
                        break;
                }
                // If we don't have any $10 bills, we need three $5 bills to make change
                else
                {
                    bill5 -= 3;
                    // Check if we have enough $5 bills to make change
                    if (bill5 < 0)
                        break;
                }
            }
            // If the bill is $10, use one $5 bill to make change and increment the $10 counter
            else if (bill == 10)
            {
                bill5 -= 1;
                bill10 += 1;
                // Check if we have enough $5 bills to make change
                if (bill5 < 0)
                    break;
            }
            // If the bill is $5, increment the $5 counter
            else // if (bill == 5)
                bill5 += 1;
        }

        // Return true if we have enough $5 bills and $10 bills to make change for all bills
        return bill5 >= 0 && bill10 >= 0;
    }
};