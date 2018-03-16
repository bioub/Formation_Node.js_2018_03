const express = require('express');
const bodyParser = require('body-parser');
const contactCtrl = require('../controllers/contact');
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');

const router = express.Router();

router.get('/', contactCtrl.list);

router.post('/',
  authenticate,
  authorize('USER'),
  bodyParser.json(),
  contactCtrl.add,
);

router.get('/:id', contactCtrl.show);

router.delete('/:id',
  authenticate,
  authorize('ADMIN'),
  contactCtrl.remove,
);

router.put('/:id',
  authenticate,
  authorize('USER'),
  bodyParser.json(),
  contactCtrl.replace,
);


// Ajouter les routes suivantes
// GET /api/contacts/:id -> afficher le contact
// router.get('/:id', contactCtrl.show);
// Dans le controleur const id = req.params.id;

// DELETE /api/contacts/:id -> supprimer le contact
// PUT /api/contacts/:id -> remplacer le contact



module.exports = router;
