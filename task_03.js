/*
### Task-3
You decided to buy a pair of shoes and socks. 
Calculate how much money you'll have left after the purchase.

**Input:**
The first line of the input is the money you brought.
The second line is the combined cost of shoes and socks.

**Output:**
Print the money left after buying the items.

---

**Sample Input:**
2000
1500

**Sample Output:**
500
*/

const money = 1900;
const shoesCost = 1200;
const socksCost = 300;
const totalCost = shoesCost + socksCost;
const remainMoney = money - totalCost;
console.log("I have ", remainMoney, "Taka")