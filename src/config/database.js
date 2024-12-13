require('dotenv').config();
const mysql = require('mysql2/promise');
const mongoose = require('mongoose');

const connection = async () => {
    const options = {
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
        
    }
    await mongoose.connect(process.env.DB_HOST, options);
    const state = mongoose.connection.readyState;
    console.log("Trang thai: ", state);
}

module.exports = connection