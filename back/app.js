const express = require('express');
const app = express();
const connectionBDD = require('./config/bdd');
const routes = require('./routes/routes');
const cors = require('cors');

connectionBDD();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/taches', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));