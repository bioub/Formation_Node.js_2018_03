const contactService = require('../services/contact-mongoose');

exports.list = async (req, res, next) => {
  const contacts = await contactService.findAll();
  res.json(contacts);
};


exports.add = async (req, res, next) => {
  try {
    const contact = await contactService.create(req.body);
    res.statusCode = 201;
    res.json(contact);
  }
  catch (err) {
    next(err);
  }
};


exports.show = async (req, res, next) => {
  const id = req.params.id;
  const contact = await contactService.findById(id);

  if (!contact) {
    return next(); // -> notFound
  }

  res.json(contact);
};


exports.remove = async (req, res, next) => {
  const id = req.params.id;
  const contact = await contactService.remove(id);

  if (!contact) {
    return next(); // -> notFound
  }

  res.json(contact);
};


exports.replace = async (req, res, next) => {
  const id = req.params.id;
  const contact = await contactService.replace(id, req.body);

  if (!contact) {
    return next(); // -> notFound
  }

  res.json(contact);
};

