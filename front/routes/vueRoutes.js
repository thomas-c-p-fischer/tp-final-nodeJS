const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/taches', (req, res) => {
  res.render('taches');
});

router.get('/taches/:id', (req, res) => {
  res.render('tache');
});

router.get('/createTache', (req, res) => {
  res.render('createTache');
});

module.exports = router;
