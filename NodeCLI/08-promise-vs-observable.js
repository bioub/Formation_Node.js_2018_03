const { Observable } = require('rxjs')

function timeout(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
}

// timeout(1000)
//   .then(() => {
//     console.log('1s');
//   });

function interval(delay) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next(delay);
    }, delay);
  });
}

interval(1000)
  .subscribe(() => {
    console.log('1s');
  });
