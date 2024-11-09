/*
### Task-4
You are at a bookstore to buy some books and a bag. 
Find out how much money will be returned after your purchase.

**Input:**
The first line of the input is the total amount of money you have.
The second line is the total cost of the books and the bag.

**Output:**
Print the remaining money after the purchase.

---

**Sample Input:**
1200
900

**Sample Output:**
300
*/

const money = 2100;
const bookPrice = 600;
const bagPrice = 700;
const totalCost = bookPrice + bagPrice;
const remainingMoney = money - totalCost;
console.log(remainingMoney);