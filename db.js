const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then((data) => {
            console.log(`Shopkart servers is connected with server: ${data.connection.host}`);
        })
        .catch((error) => {
            console.error('Error connecting to database:', error.message);
        });
};

module.exports = connectDatabase;
