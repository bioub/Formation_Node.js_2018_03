const Controller = require('../../lib/controller')
const societeFacade = require('./facade')

class SocieteController extends Controller {}

module.exports = new SocieteController(societeFacade)
