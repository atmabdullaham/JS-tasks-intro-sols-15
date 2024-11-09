/*
### Task-4
Write a program to find the average marks of Art, Music, Physical Education, Social Studies, and Environmental Science of a student.



**Input:**
The first line of the input is the marks of the five subjects mentioned above, respectively.

**Output:**
Print the result in 2 decimal places.

---

**Sample Input:**
90, 88, 85.5, 78, 92.75

**Sample Output:**
86.45
*/
const art = 85.6;
const music = 87.46;
const physical = 98.89;
const social = 88.12;
const environmentalScience = 98.32;

const totalMarks = art + music + physical + social + environmentalScience;

const totalSub = 5;
const average = totalMarks / totalSub;

console.log(average);

const toFixedAverage = average.toFixed(2);

console.log(toFixedAverage);

const toFlotAverage = parseFloat(toFixedAverage);
console.log(toFlotAverage);