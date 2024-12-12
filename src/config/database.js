const mysql = require('mysql2/promise');
const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect('mongodb://root:123456@localhost:27017/');
        const state = mongoose.connection.readyState;
        console.log("Trang thai: ", state);
        
    }catch (error){
        console.log('Error connection DB: ', error);
    }
}

module.exports = connection