const express = require('express');
const router = express.Router();
const { getHomepage, getABC, getQuanBeoIoT } = require('../controllers/homeController');

router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/quanbeoiot", getQuanBeoIoT);

module.exports = router;


