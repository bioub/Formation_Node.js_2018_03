const Router = require('express').Router
const router = new Router()

const societe = require('./model/societe/router')
const contact = require('./model/contact/router')

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to api-rest-from-yo API!' })
})
router.use('/societe', societe)
router.use('/contact', contact)

module.exports = router
