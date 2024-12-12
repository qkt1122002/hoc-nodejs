const connection = require('../config/database');
const { getAllUsers, getUserByID, updateUser, deleteUserById } = require('../services/CRUDService')
const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    
    return res.render('index.ejs', {users: results});
};

const getAPI = (req, res) => {
    connection.query(
        'SELECT * from `Users`',
        function (err, results, fields){
            res.send(results);
        }
    );
}

const getABC = (req, res) => {
    res.send('check ABC');
}

const getQuanBeoIoT = (req, res) => {
    res.send('<h1> QuanBeoIoT </h1>');
}

const getAddUser = (req, res) => {
    res.render('add.ejs');
}

const postAddUser = async (req, res) => {
    let{email, name, city} = req.body;
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?);`, [email, name, city]
    );
    
    return res.render('add.ejs');
}

const getEditUser = async (req, res) => {
    let id = req.params.id;
    let user = await getUserByID(id);
    return res.render('edit.ejs', {user: user});
}
const postEditUser = async (req, res) => {
    let {email, name, city} = req.body;
    let id = req.params.id;
    await updateUser(email, name, city, id);
    let user = await getUserByID(id);
    res.redirect('/');
}

const getDeleteUser = async (req, res) => {
    let id = req.params.id;
    user = await getUserByID(id);
    res.render('delete.ejs', {user: user});
}

const postDeleteUser = async (req, res) => {
    let id = req.params.id;
    await deleteUserById(id);
    res.redirect('/');
}

module.exports = {
    getHomepage, getABC, getQuanBeoIoT, getAPI,
    postAddUser, getAddUser, getEditUser, postEditUser,
    postDeleteUser, getDeleteUser
}