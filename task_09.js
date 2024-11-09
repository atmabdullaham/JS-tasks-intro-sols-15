/*
### Task-5
Write a program to calculate the average score of Science, Computer Studies, Literature, Philosophy, and Psychology of a student.

**Input:**
The first line of the input is the marks of the five subjects mentioned above, respectively.

**Output:**
Print the result in 2 decimal places.

---

**Sample Input:**
70.5, 85, 77, 90.25, 80

**Sample Output:**
80.55
*/

const science = 87.6;
const computer = 81.46;
const literature = 88.89;
const psychology = 89.12;
const philosophy = 58.32;

const totalMarks = science + computer + literature + psychology + philosophy;

const totalSub = 5;
const average = totalMarks / totalSub;

console.log(average);

const toFixedAverage = average.toFixed(2);

console.log(toFixedAverage);

const toFlotAverage = parseFloat(toFixedAverage);
console.log(toFlotAverage);