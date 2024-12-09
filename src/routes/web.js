const express = require('express');
const router = express.Router();
const { 
    getHomepage, getABC, getQuanBeoIoT, getAPI, postAddUser, getAddUser, getEditUser, 
    postEditUser, postDeleteUser 

} = require('../controllers/homeController');

router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/quanbeoiot", getQuanBeoIoT);

router.get('/api', getAPI);

router.get('/add-user', getAddUser)
router.post('/add-users', postAddUser);

router.get('/edit-user/:id', getEditUser);
router.post('/edit-user/:id', postEditUser);

router.post('/delete-user/:id', postDeleteUser);
module.exports = router;


