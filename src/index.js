require('dotenv').config();
const express = require("express");
const path = require('path')
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//Config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index.ejs');
});

app.get("/abc", (req, res) => {
    res.send('check ABC');
});

app.get("/quanbeoiot", (req, res) => {
    res.send('<h1> QuanBeoIoT </h1>');
});



app.listen(port, hostname, () => {
    console.log(`Listen on port ${port}`);
});