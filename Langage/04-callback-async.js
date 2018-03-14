setTimeout(function cb1() {
  console.log('cb1');
}, 1000);

setTimeout(function cb2() {
  console.log('cb2');
}, 500);

setTimeout(function cb3() {
  console.log('cb3');
}, 1000);

console.log('Fin');


// pile d'appels
// ^
// |
// |
// |
// |
// |                                                        log     log   log
// |setTimeout - setTimeout - setTimeout - log('Fin') ....  cb2 ... cb1 - cb3
// +--------------------------------------------------------0,5-----1---> temps
// output                                  Fin              cb2     cb1   cb3
//
// file d'attente : 

