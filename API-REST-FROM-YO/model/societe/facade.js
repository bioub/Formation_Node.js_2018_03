const Facade = require('../../lib/facade')
const societeSchema = require('./schema')

class SocieteFacade extends Facade {}

module.exports = new SocieteFacade('Societe', societeSchema)
