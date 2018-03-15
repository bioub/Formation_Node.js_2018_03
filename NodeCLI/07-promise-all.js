function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function timeout(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
}

Promise.all([
  timeout(getRandomIntInclusive(0, 1000)),
  timeout(getRandomIntInclusive(0, 1000)),
])
.then((delays) => {
  console.log(delays.join(', '));
})
