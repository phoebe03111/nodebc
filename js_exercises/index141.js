let tripExpenses = [20, 15, 10];
let budget = tripExpenses.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(`hotel: ${tripExpenses[0]}, trip: ${tripExpenses[1]}, meals: ${tripExpenses[2]}`)
console.log('Total trip budget:', budget);



