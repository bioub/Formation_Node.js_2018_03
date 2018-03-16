const Facade = require('../../lib/facade')
const contactSchema = require('./schema')

class ContactFacade extends Facade {}

module.exports = new ContactFacade('Contact', contactSchema)
