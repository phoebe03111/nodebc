function getUserID () {
    return 50;
}

function isUserValid () {
    return (getUserID() > 30)? true : false;
}

if (isUserValid() == true) {
    console.log('User valid');
} else {
    console.log('User not valid');
}