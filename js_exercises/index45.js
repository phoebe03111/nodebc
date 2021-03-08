let playerName = "Patrik Laine is lame";
let teams = "New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins";
let message = "Winnipeg is the best Canadian city, Go Winnipeg";

let patrik = playerName.slice(0,-8);
let jets = teams.slice(-26, -22);
let best = message.slice(12,20);
let go = message.slice(-13, -9);

console.log(patrik); 
console.log(jets); 
console.log(best); 
console.log(go); 

let patrikUpperCase = patrik.toUpperCase();
let jetsCap = jets.charAt(0).toUpperCase() + jets.slice(1);

console.log(patrikUpperCase);
console.log(jetsCap);

let template = `${patrikUpperCase} is ${best} ${jetsCap} player ${go} ${jetsCap}!!`;
console.log(template);