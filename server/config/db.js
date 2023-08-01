const mongoose = require('mongoose');
const { Mongoclient} = require('mongodb');

const MONGODB_URI = '';

const DB_NAME ='V-Teach platform';


const connectDB = async () =>{
    try {
        const client = await MongoClientconnect(MONGODB_URI, {
            useNewUrlParser: true,
            UseUnifiedTopology: true,
        });

        const db = client.db(DB_NAME);

        console.log('connected to MongoDB successfully');
    } catch (error) {
        console.error('Error when connecting to DB', error)
    }
}
modeule.exports = connectDB;