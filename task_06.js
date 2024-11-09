/*
### Task-6
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

**Input:**
The first line of the input is the marks of the five subjects mentioned above, respectively.

**Output:**
Print the result in 2 decimal places.

---

**Sample Input:**
75.25, 65, 80, 35.45, 99.50

**Sample Output:**
71.04
*/


// const (mathematics, biology, chemistry, physics, bangla) = (75.25, 65, 15.5, 34.45, )

const math = 75.25;
const biology = 45.54;
const bangla = 56.54;
const chemistry = 45.4;
const physics = 54.25;

const totalMarks = math + biology + bangla + chemistry + physics;
const totalSubject = 5;

const averageMarks = totalMarks / totalSubject;
console.log(averageMarks);
const formattedAverage = averageMarks.toFixed(2);
console.log(formattedAverage);
const parseFormattedAverage = parseFloat(formattedAverage)

console.log(parseFormattedAverage);