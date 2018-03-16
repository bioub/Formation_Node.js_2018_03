const express = require('express');
const bodyParser = require('body-parser');
const contactCtrl = require('../controllers/contact');

const router = express.Router();

router.get('/', contactCtrl.list);

router.post('/',
  bodyParser.json(),
  contactCtrl.add,
);

router.get('/:id', contactCtrl.show);

router.delete('/:id', contactCtrl.remove);

router.put('/:id',
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
