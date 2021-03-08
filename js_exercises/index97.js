for (let number = 100; number >= 0; number--) {
    if (number%10 === 0 && number !== 0 && number !== 100) {
        console.log(`**${number}**`);
    } else {
        console.log(number);
    }
}
