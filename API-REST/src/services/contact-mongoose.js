const Contact = require('../models/contact');

exports.findAll = () => Contact.find();

exports.findById = (id) => Contact.findById(id);

exports.create = (contact) => Contact.create(contact);

exports.replace = (id, contact) => Contact.findByIdAndUpdate(id, contact);

exports.remove = (id) => Contact.findByIdAndRemove(id);
