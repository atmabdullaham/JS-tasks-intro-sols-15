/*
### Task-3
Write a program to calculate the average marks of English, History, Geography, Computer Science, and Economics of a student.

**Input:**
The first line of the input is the marks of the five subjects mentioned above, respectively.

**Output:**
Print the result in 2 decimal places.

---

**Sample Input:**
85, 78.5, 92, 88.25, 73

**Sample Output:**
83.75
*/
const english = 85;
const history = 85.54;
const geography = 86.5;
const computerScience = 89;
const economics = 96;
const totalMarks = english + history + geography + computerScience + economics;
const totalSub = 5;
const averageMarks = totalMarks / totalSub;
console.log(averageMarks);
const averageMarksToFixed = averageMarks.toFixed(2);
console.log(averageMarksToFixed);
const averageMarksToFixedToInt = parseFloat(averageMarksToFixed);
console.log(averageMarksToFixedToInt); 