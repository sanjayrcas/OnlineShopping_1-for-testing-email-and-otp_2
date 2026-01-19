const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.DATABASE);
         console.log(`DataBase was connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(`DataBase is not connecting: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;