// Nouveautés ES5: API Array
// forEach, filter, map, reduce....

const prenoms = ['Romain', 'Jean', 'Eric'];

prenoms
  .filter((prenom) => prenom.length === 4)
  .map((prenom) => prenom.toUpperCase())
  .forEach(function cb(prenom, i, prenoms) {
    console.log(prenom);
  });

console.log('Fin');

console.log(prenoms.join(', ')); // Romain, Jean, Eric

const nbs = [3, 2, 1];

const sum = nbs.reduce((acc, nb) => acc + nb, 0);
console.log('Sum', sum);


// pile d'appels
// ^
// |
// |
// |
// |
// |                         log  log
// |=> - => - =>   => - =>   cb - cb
// |filter       - map     - forEach   - log('Fin')
// +-------------------------------------------> temps
// output                    JEAN ERIC   Fin
