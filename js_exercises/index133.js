let mutants = [
    "Professor X",
    "Cyclops",
    "Iceman",
    "Angel",
    "Magneto",
    "Beast",
    "Phoenix",
    "Logan",
    "Gambit",
  ];

for (let i = 0; i < mutants.length; i++) {
    if (mutants[i] == 'Magneto') {
        break;
    } else {
        console.log(mutants[i]);
    }
}

let magPosition = mutants.indexOf('Magneto');

for (let i = 0; i < mutants.length; i++) {
    if (i !== magPosition) {
        console.log(`${i+1}. ${mutants[i].toUpperCase()}`);
    }
  }

