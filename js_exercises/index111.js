function even(n1) {
    if (n1 % 2 === 0) {
        console.log(`${n1} is even`);
        return true;
    } else {
        console.log(`${n1} is odd`);
        return false;
    }
}

even(2);
even(5);
even(3);
even(24);
even(12);