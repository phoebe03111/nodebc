let userAndPassword = "pepito2017, 12345";
let username = userAndPassword.substr(0,10);
console.log(username);

let password = userAndPassword.substr(-5,5);
console.log(password);

console.log(`The user ${username} has ${password} as password`);