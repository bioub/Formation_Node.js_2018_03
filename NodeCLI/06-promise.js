function timeout(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
}

timeout(1000)
  .then((delay) => timeout(1000))
  .then((delay) => {
    console.log('2s');
  });

(async () => {
  await timeout(1000);
  await timeout(1000);
  console.log('2s');
})();


