const mongoose = require('mongoose');

const Connection = async (username, password) => {
    const URL = `mongodb+srv://sanikakotgire:SUGAR69@cluster0.povoawa.mongodb.net/?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }
};

module.exports = Connection;
