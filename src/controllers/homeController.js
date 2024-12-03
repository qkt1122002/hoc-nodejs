const connection = require('../config/database');
const getHomepage = (req, res) => {
    return res.render('index.ejs');
};

const getAPI = (req, res) => {
    connection.query(
        'SELECT * from `Users`',
        function (err, results, fields){
            console.log('Result: ', results);
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

const postAddUser = (req, res) => {
    console.log(req.body);
    return res.send('Create User');
}
module.exports = {
    getHomepage, getABC, getQuanBeoIoT, getAPI,
    postAddUser
}