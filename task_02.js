/*
### Task-2
You are buying notebooks and pens from a stationary shop. 
Calculate the remaining amount after making the purchase.

**Input:**
The first line of the input is the money you have.
The second line is the total cost of the notebooks and pens.

**Output:**
Print the remaining amount.

---

**Sample Input:**
500
350

**Sample Output:**
150
*/

const money = 600;
const notebooksPrice = 350;
const penPrice = 50;
const totalConst = notebooksPrice + penPrice;
const remainingMoney = money - totalConst;

console.log("Money remaining:", remainingMoney);