/*
### Task-6
Write a program to calculate the average grades of French, German, Spanish, Chinese, and Japanese of a student.

**Input:**
The first line of the input is the marks of the five subjects mentioned above, respectively.

**Output:**
Print the result in 2 decimal places.

---

**Sample Input:**
82, 79.5, 88.25, 90, 84

**Sample Output:**
84.75
*/

const french = 89.64;
const german = 87.46;
const spanish = 89.89;
const chinese = 82.12;
const japanese = 88.32;

const totalMarks = french + german + spanish + chinese + japanese;

const totalSub = 5;
const average = totalMarks / totalSub;

console.log(average);

const toFixedAverage = average.toFixed(2);

console.log(toFixedAverage);

const toFlotAverage = parseFloat(toFixedAverage);
console.log(toFlotAverage);