function getShapePetimeter(base, height) {
    let perimeter;
    
    if (typeof base !== 'number' || typeof height !== 'number') {
        console.log('Please enter valid numbers');
        return;
    } else if (base === height) {
        perimeter = base * 4;
    } else if (base !== height) {
        perimeter = (base + height) * 2;
    }
  
    console.log(`${perimeter} is the shape perimeter`);

    if (perimeter > 100) {
        console.log('This perimeter is too big');
    } else {
        console.log('This perimeter is fine');
    } 
    return perimeter;
}

getShapePetimeter(10, 10);
getShapePetimeter(10, 20);
getShapePetimeter(100, 200);
getShapePetimeter('a', 20);