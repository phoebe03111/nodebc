let user = {
    username: 'Hua',
    password: null,
    greet: function () {
        if (user.username !== null) {
            console.log(`Hello, I\'m user ${this.username}`);
        } else {
            console.log('Please assign a username value');
        }
    },
    updateUsername: function(newName) {
        user.username = newName;
    },
    updatedPassword: function(newPass) {
        user.password = newPass;
    }
}

user.greet();
user.updateUsername('Oliver');
user.updatedPassword('oliver1234');
console.log(user.username, user.password);




