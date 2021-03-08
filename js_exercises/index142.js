let firstPerson = ['Raylan', 'Givens', 'Harlan county', 35];
let secondPerson = ['Tully', 'Hart', 'Seattle ciry', 43];

let first = firstPerson.reduce(function(accumulator,currentValue){
    return accumulator + ' '+ currentValue;
});
console.log(first);

let second = secondPerson.reduce(function(accumulator,currentValue){
    return accumulator + ' '+ currentValue;
});
console.log(second);

first === second ? console.log('Match!') : console.log('Not the same people.');



