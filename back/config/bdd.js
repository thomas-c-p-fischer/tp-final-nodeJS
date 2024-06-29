const mongoose = require('mongoose');

const connectionBDD = async () => {
    try {
        await mongoose.connect('mongodb://mongo:27017/todolist', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connecté');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectionBDD;