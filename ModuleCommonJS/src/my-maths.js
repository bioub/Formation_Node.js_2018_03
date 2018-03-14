// (function (exports, require, module, __filename, __dirname) {

const convertToNumber = Number;

const sum = (a, b) => convertToNumber(a) + convertToNumber(b);
const substract = (a, b) => a - b;

// global.sum = sum;
exports.sum = sum;
exports.substract = substract;


// });