const isEven = function(i) {
    if (i % 2 === 0) {
        return `${i} is even`;
    } else {
        return `${i} is odd`;
    }
}

module.exports = isEven;