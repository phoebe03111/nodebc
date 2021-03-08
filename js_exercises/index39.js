let firstName = 'Raylan';
let lastName = 'Givens';

let firsrNameCharacters = firstName.length;
let lastNameCharacters = lastName.length;
let charsDiff = firsrNameCharacters - lastNameCharacters

console.log (`My first name is ${firstName} and it is ${firsrNameCharacters} characters long`);
console.log (`My last name is ${lastName} and it is ${lastNameCharacters} characters long`);
console.log (`The character difference between my first name and last name is ${charsDiff}`);
console.log (`My first name is longer than my last name: true or false?`, firsrNameCharacters > lastNameCharacters);