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

exports.findById = (id) => {
  const contact = contacts.find((c) => c.id === Number(id));
  return Promise.resolve(contact);
};

exports.create = (contact) => {
  contact.id = nextId();
  contacts.push(contact);
  return Promise.resolve(contact);
};

exports.replace = (id, contact) => {
  const i = contacts.findIndex((c) => c.id === Number(id));
  contact.id = Number(id);
  contacts[i] = contact;
  return Promise.resolve(contact);
};

exports.remove = (id) => {
  const contact = contacts.find((c) => c.id === Number(id));
  const i = contacts.indexOf(contact);

  contacts.splice(i, 1);

  return Promise.resolve(contact);
};

// method Array.prototype.splice (MDN)
