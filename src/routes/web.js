const express = require('express');
const router = express.Router();
const { getHomepage, getABC, getQuanBeoIoT, getAPI, postAddUser } = require('../controllers/homeController');

router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/quanbeoiot", getQuanBeoIoT);

router.get('/api', getAPI);

router.post('/add-users', postAddUser);
module.exports = router;


