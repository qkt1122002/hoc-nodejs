const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    res.render('index.ejs');
});

router.get("/abc", (req, res) => {
    res.send('check ABC');
});

router.get("/quanbeoiot", (req, res) => {
    res.send('<h1> QuanBeoIoT </h1>');
});

module.exports = router;


