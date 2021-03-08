let mutants = [
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Magneto',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit'
];

let newMutants = mutants.filter((mutant) => {
    if (mutant === 'Magneto' || mutant === 'Iceman' || mutant === 'Gambit') {
        return false;
    } else {
        return true;
    }
})

console.log(newMutants);