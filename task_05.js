/*
### Task-5
You went to a cafe and ordered a coffee and a sandwich. 
Calculate the change you'll receive after paying.

**Input:**
The first line of the input is the amount of money you have.
The second line is the combined cost of the coffee and sandwich.

**Output:**
Print the change you will receive.

---

**Sample Input:**
800
650

**Sample Output:**
150
*/

const money = 400;
const coffee = 150;
const sandwich = 120;
const totalBill = coffee + sandwich;
const remainingMoney = money - totalBill;
console.log(remainingMoney);