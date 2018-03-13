/**
 * Additionne 2 params
 * @param {number|string} a Le 1er nombre
 * @param {number|string} b Le 2e nombre
 * @returns {number} La somme
 */
const sum = (a, b) => Number(a) + Number(b);

for (let i = 0; i < 3; i++) {
  console.log(sum(i, i));
}
