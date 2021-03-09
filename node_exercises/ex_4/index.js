const oneLinerJoke = require('one-liner-joke');
const getRandomJoke = oneLinerJoke.getRandomJoke();
console.log('1. Random joke:', getRandomJoke);
console.log('2. Joke category', getRandomJoke.tags);