let students = "Raylan, Winona, Boyd, Ava, Tim";
let result = students.split(',');

console.log(`Students names: ${result}`);

result.forEach(function(students){
    console.log("Hi", students)
});