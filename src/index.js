require('dotenv').config();
const express = require("express");
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const mysql = require('mysql2');
const { log } = require('console');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

configViewEngine(app);

app.use('/', webRoutes);

// test connection

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.query(
    'SELECT * from `Users`',
    function (err, results, fields){
        console.log('Result: ', results);
        console.log('Field: ', fields);
        
    }
);

app.listen(port, hostname, () => {
    console.log(`Listen on port ${port}`);
});