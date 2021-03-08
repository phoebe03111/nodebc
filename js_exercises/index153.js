let arithmetic = {
    add: function (n1,n2) {
        console.log(n1+n2);
    },
    subtract: function (n1,n2) {
        console.log(n1-n2);
    },
    multiply: function (n1,n2) {
        console.log(n1*n2);
    },
    divide: function (n1,n2) {
        console.log(n1/n2);
    },
    remainder: function (n1,n2) {
        console.log(n1%n2);
    }
}

arithmetic.add(2,10);
arithmetic.subtract(10,5);
arithmetic.multiply(3,100);
arithmetic.divide(40,2);
arithmetic.remainder(20,2);