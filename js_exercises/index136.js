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

let selectedMutants = [];

mutants.forEach(function(mutant){
    if (mutant === 'Iceman' || mutant === 'Logan' || mutant === 'Phoenix') {
        selectedMutants.push(mutant);
    } 
})

console.log(selectedMutants);



