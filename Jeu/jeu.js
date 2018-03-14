const readline = require('readline');
const chalk = require('chalk');
const random = require('./random');

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

  jouer() {
    if (this._essais.length) {
      // 5 - Template literal / template string
      console.log(chalk.blue(`Vous avez déjà joué : ${this._essais.join(' - ')}`));
    }

    this._rl.question(chalk.cyan('Quel est le nombre ? '), (answer) => {

      // 6 - API Number
      const entierSaisi = Number.parseInt(answer);

      // 6 - API Number
      if (Number.isNaN(entierSaisi)) {
        console.log(chalk.red('Erreur : il faut saisir un entier'));
        return this.jouer();
      }

      this._essais.push(entierSaisi);

      if (entierSaisi < this._entierAlea) {
        console.log(chalk.yellow('Trop petit'));
        return this.jouer();
      }

      if (entierSaisi > this._entierAlea) {
        console.log(chalk.yellow('Trop grand'));
        return this.jouer();
      }

      console.log(chalk.green('Gagné'));
      this._rl.close();

    });
  }
}

module.exports = Jeu;
