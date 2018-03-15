const { EventEmitter } = require('events');

const events = new EventEmitter();

function createUser(user) {
  // TODO Insert in Mongo

  events.emit('user.created', user);
}

events.on('user.created', (user) => {
  console.log(user.email);
});

/*
events.once('user.created', (user) => {
  console.log(user.email);
});
*/

createUser({
  email: 'romain.bohdanowicz@gmail.com',
});
