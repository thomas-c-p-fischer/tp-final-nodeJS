const Tache = require('../models/tache');

exports.getTaches = async (req, res) => {
  try {
    const taches = await Tache.find();
    res.json(taches); 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createTache = async (req, res) => {
  const tache = new Tache({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const newTache = await tache.save();
    res.status(201).json(newTache);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.renderCreateTache = (req, res) => {
  res.render('createTache');
};

exports.createTacheList = async (req, res) => {
  console.log(req.body);
  try {
    const tacheList = await Tache.insertMany(req.body.tasks);
    res.status(201).json(tacheList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getTache = async (req, res) => {
  try {
    const tache = await Tache.findById(req.params.id);
    if (tache == null) {
      return res.status(404).json({ message: 'Tache not found' });
    }
    res.json(tache);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateTache = async (req, res) => {
  try {
    const tache = await Tache.findById(req.params.id);
    if (tache == null) {
      return res.status(404).json({ message: 'Tache not found' });
    }

    if (req.body.title != null) {
        tache.title = req.body.title;
    }
    if (req.body.description != null) {
        tache.description = req.body.description;
    }
    if (req.body.completed != null) {
        tache.completed = req.body.completed;
    }

    const updatedTache = await tache.save();
    res.json(updatedTache);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteTache = async (req, res) => {
  try {
    const tache = await Tache.findById(req.params.id);
    if (tache == null) {
      return res.status(404).json({ message: 'Tache not found' });
    }

    await tache.remove();
    res.json({ message: 'Tache deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
