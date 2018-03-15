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

