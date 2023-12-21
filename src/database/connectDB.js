const mongoose = require('mongoose');
// require('dotenv').config();

const connectURL = () => {
    const uri = "mongodb+srv://taskManagement:6AcwVmt6rKCiuiQN@shimulclaster1.85diumq.mongodb.net/?retryWrites=true&w=majority";

    return uri;
}

// ? here is the connection of mongodb bro yo yo
const connectDB = async () => {

    console.log('db is connecting...')

    const uri = connectURL();
    await mongoose.connect(uri, { dbName: 'tast-managementDB' });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

}

module.exports = connectDB;