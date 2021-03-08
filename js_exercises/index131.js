let femaleStudents = ['Winona', 'Ava', 'Rachel', 'Ellen May', 'Mags'];
let maleStudents = ['Raylan', 'Boyd', 'Arlo', 'Tim', 'Art'];
let students = femaleStudents.concat(maleStudents);
let sortedStudents = students.sort();

console.log(femaleStudents[0]);
console.log(femaleStudents[1]);
console.log(femaleStudents[2]);
console.log(femaleStudents[3]);
console.log(femaleStudents[4]);


let j = 0;
while (j < maleStudents.length) {
    console.log(maleStudents[j]);
    j++;
}

for (let i = 0; i < students.length; i++) {
    console.log(sortedStudents[i]);
}