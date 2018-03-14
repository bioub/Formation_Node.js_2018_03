// En JS on manipule de nombreux objets pré-instanciés

// au niveau du language
console.log(typeof Math); // object

// au niveau du navigateur
console.log(typeof document); // object (dans le navigateur)

// au niveau de Node.js
console.log(typeof process); // object (dans le navigateur)

// au niveau de MongoDB
console.log(typeof db); // object (dans MongoShell)


// Les objets JS sont extensibles

console.log(Math.sum); // undefined
console.log(Math.hasOwnProperty('sum')); // false

// Ajouter des propriétés/méthodes
Math.sum = (a, b) => a + b;
console.log(Math.sum('1', '2')); // '12'

// Modifier des propriétés/méthodes
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum('1', '2')); // 3

// Supprimer des propriétés/méthodes
delete Math.sum;
console.log(Math.sum); // undefined

// Les objets JS sont des systèmes clés/valeurs
// équivalent
// en PHP : tableaux associatifs
// en Java : Map

// Mauvaise pratique d'étendre les objets que vous n'avez pas créé
// (comme Math ici)

// 3 cas possible de création d'objets

// 1 - objet créé une seule fois ou très simple à créer
// -> object literal

const myMath = {
  sum: (a, b) => Number(a) + Number(b),
  substract: (a, b) => a - b,
};

const coords = {
  x: 10,
  y: 20,
};

// (2 opérateurs pour accéder au contenu d'un objet)
console.log(coords.x);
console['log'](coords['x']);
const prop = 'x';
console.log(coords[prop]);

// (boucler sur les clés d'un objet)
for (let key in coords) {
  console.log('Clé', key);
  console.log('Valeur', coords[key]);
}

// 2 - multi instanciés, compliqué à créer, sans méthode et sans types
// -> factory function

const coords3dFactory = (x, y, z) => {
  x = x || 0;
  y = y || 0;
  z = z || 0;

  return {
    x: x,
    y: y,
    z: z,
    getInfos: function() { return 'x ' + this.x; },
  };
};

const coords3dFactoryES6 = (x = 0, y = 0, z = 0) => ({ x, y, z });

const coords3dA = coords3dFactory(10, 20);
const coords3dB = coords3dFactory(10, 20);
console.log(coords3dA.z); // 0
console.log(coords3dA.getInfos === coords3dB.getInfos); // false

// 3 - multi instanciés, compliqué à créer, avec méthodes et/ou des types
// -> constructor function (convention commence par un MAJ : PascalCase)

const Contact = function(prenom) {
  this._prenom = prenom;
};

Contact.getClass = function() {
  return 'Contact';
};

Contact.prototype.hello = function() {
  return 'Bonjour je suis ' + this._prenom;
};

const romain = new Contact('Romain');
console.log(typeof romain); // object
console.log(romain instanceof Contact); // true
console.log(romain._prenom); // Romain (ici on ne devrait utiliser _prenom
// car privée)
console.log(Contact.getClass());
console.log(romain.hello());
console.log(romain.hasOwnProperty('_prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false


const eric = new Contact('Eric');
console.log(romain.hello === eric.hello); // true
