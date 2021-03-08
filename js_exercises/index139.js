let numbers = [];
for (i=100; i >=1; i--) {
    numbers.push(i);
}

let evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
})

let oddNumbers = numbers.filter((num) => {
    return num % 2 !== 0;
})

console.log('Last 10 odd numbers:', evenNumbers.slice(evenNumbers.length-10, evenNumbers.length));
console.log('First 20 odd numbers:', oddNumbers.slice(0, 20));