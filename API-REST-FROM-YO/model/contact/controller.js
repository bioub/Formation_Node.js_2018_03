const Controller = require('../../lib/controller')
const contactFacade = require('./facade')

class ContactController extends Controller {}

module.exports = new ContactController(contactFacade)
