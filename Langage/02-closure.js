function externe(msg) {
  // Portée de closure (portée sauvegardée automatiquement)
  // Pour créer une closure :
  // 1 - une fonction déclarée dans une fonction ou un bloc
  // 2 - la fonction interne soit appelée en dehors
  function interne() {
    console.log(msg);
  }
  return interne;
}

const helloFct = externe('Hello');

helloFct();

// pile d'appels
// ^
// |
// |
// |
// |
// |
// |
// |externe - helloFct/interne
// +-------------------------------------------> temps

// Dans 1s : 3 3 3
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Dans 1s : 0 1 2
for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 1000);
}

// Dans 1s : 0 1 2
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
