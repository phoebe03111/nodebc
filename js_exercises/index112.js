function showNumbers(start, end) {
    if (start > end) {
        for (let i = start; i >= end; i--) {
            console.log(i);
        }
    } else if (start < end) {
        for (let i = start; i <= end; i++) {
            console.log(i);
        }
    } else if (start === end) {
        console.log('They are the same number:', start);
    } else if (typeof start !== 'number' || typeof end !== 'number') {
        console.log('Please enter valid numbers');
    }
}


showNumbers(0, 10);
showNumbers(10,0);
showNumbers(10, 10);
showNumbers('a',10);

