const contactService = require('../services/contact-array');

exports.list = async (req, res, next) => {
  const contacts = await contactService.findAll();
  res.json(contacts);
};


exports.add = async (req, res, next) => {
  const contact = await contactService.create(req.body);
  res.statusCode = 201;
  res.json(contact);
};


exports.show = async (req, res, next) => {
  const id = req.params.id;
  const contact = await contactService.findById(id);
  res.json(contact);
};


exports.remove = async (req, res, next) => {
  const id = req.params.id;
  const contact = await contactService.remove(id);
  res.json(contact);
};


exports.replace = async (req, res, next) => {
  const id = req.params.id;
  const contact = await contactService.replace(id, req.body);
  res.json(contact);
};

