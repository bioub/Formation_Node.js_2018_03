'use strict';

// global.prenom = 'Romain';


function hello(p1, p2) {
  return `Bonjour ${p1}, ${p2} je m'appelle ${this.prenom}`;
}

// console.log(hello());

const contact = {
  prenom: 'Romain',
};

console.log(hello.call(contact, 'Jean', 'Eric'));
console.log(hello.apply(contact, ['Jean', 'Eric']));
console.log(hello.call(contact, ...['Jean', 'Eric']));

const helloContact = hello.bind(contact);
console.log(helloContact('Jean', 'Eric'));

/*
Function.prototype.bind = function(thisArgs) {
  return function() {
    this.call(thisArgs);
  };
};
*/

const contactES3 = {
  prenom: 'Romain',
  hello: function() {
    console.log('ES3 Bonjour je m\'appelle ' + this.prenom);
  },
  helloAsync: function() {
    var that = this;
    setTimeout(function() {
      that.hello();
    }, 100);
  },
};

contactES3.hello();
contactES3.helloAsync();

const contactES5 = {
  prenom: 'Romain',
  hello: function() {
    console.log('ES5 Bonjour je m\'appelle ' + this.prenom);
  },
  helloAsync: function() {
    setTimeout(this.hello.bind(this), 100);
  },
};

contactES5.hello();
contactES5.helloAsync();

const contactES6 = {
  prenom: 'Romain',
  hello() {
    console.log(`ES6 Bonjour je m'appelle ${this.prenom}`);
  },
  helloAsync() {
    setTimeout(() => {
      this.hello();
    }, 100);
  },
};

contactES6.hello();
contactES6.helloAsync();
/*
for (var i=0; i<buttons.length, i++) {
  buttons[i].addEventListener('click', (event) => {
    // ne plus utiliser this
    // utiliser event.target à la place
  });
}
*/

