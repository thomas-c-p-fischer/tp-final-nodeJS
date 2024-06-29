const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.getTaches);
router.post('/', controller.createTache);
router.get('/create', controller.renderCreateTache);
router.post('/batch', controller.createTacheList);
router.get('/:id', controller.getTache);
router.put('/:id', controller.updateTache);
router.delete('/:id', controller.deleteTache);

module.exports = router;