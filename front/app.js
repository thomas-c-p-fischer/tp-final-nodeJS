const express = require('express');
const path = require('path');
const vueRoutes = require('./routes/vueRoutes');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', vueRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Frontend server running on port ${PORT}`));
