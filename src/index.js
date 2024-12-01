const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('Hello World');
});

app.get("/abc", (req, res) => {
    res.send('check ABC');
});

app.get("/quanbeoiot", (req, res) => {
    res.send('<h1> QuanBeoIoT </h1>');
});



app.listen(port, () => {
    console.log(`Listen on port ${port}`);
});