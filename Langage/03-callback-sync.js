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
// output                    Jean Eric   Fin
