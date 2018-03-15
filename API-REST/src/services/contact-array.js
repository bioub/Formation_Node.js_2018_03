const contacts = [{
  prenom: 'John',
  nom: 'Doe',
  id: 123,
}, {
  prenom: 'Jean',
  nom: 'Dupont',
  id: 456,
}];

const nextId = () => contacts.reduce((acc, c) => c.id > acc ? c.id : acc, 0) + 1;

exports.findAll = () => Promise.resolve(contacts);
exports.create = (contact) => {
  contact.id = nextId();
  contacts.push(contact);
  return Promise.resolve(contact);
};

exports.replace = (contact) => {

  const i = contacts.findIndex((c) => c.id === Number(contact.id));

  contacts[i] = contact;

  return Promise.resolve(contact);
};

// method Array.prototype.splice (MDN)
