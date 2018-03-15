// 1 - Method properties
const random = {
  get() {
    return Math.random();
  },

  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },

  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  },

  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  },
};

const readline = require('readline');


// 2 - class
class Jeu {
  /**
   * Démarre une nouvelle partie
   * @constructor
   * @param {object} [options = {}] Les options de la partie
   * @param {number} [options.min = 0] La borne min
   * @param {number} [options.max = 100] La borne max
   */
  constructor(options = {}) {
    //options = options || {}; // 3 - default value

    // // 4 - destructuring object + default value
    // const min = options.min || 0;
    // const max = options.max !== undefined ? options.max : 100;

    const { min = 0 , max = 100 } = options;

    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    this._entierAlea = random.getIntInclusive(min, max);
    this._essais = [];
  }

  /*
  static getClass() {
    return 'Jeu';
  }
  */

  jouer() {
    if (this._essais.length) {
      // 5 - Template literal / template string
      console.log(`Vous avez déjà joué : ${this._essais.join(' - ')}`);
    }

    this._rl.question('Quel est le nombre ? ', (answer) => {

      // 6 - API Number
      const entierSaisi = Number.parseInt(answer);

      // 6 - API Number
      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un entier');
        return this.jouer();
      }

      this._essais.push(entierSaisi);

      if (entierSaisi < this._entierAlea) {
        console.log('Trop petit');
        return this.jouer();
      }

      if (entierSaisi > this._entierAlea) {
        console.log('Trop grand');
        return this.jouer();
      }

      console.log('Gagné');
      this._rl.close();

    });
  }
}

const jeu = new Jeu({
  max: 10,
});
jeu.jouer();
