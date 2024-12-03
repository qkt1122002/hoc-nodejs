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
    let{email, name, city} = req.body;
    connection.query(`INSERT INTO Users (email, name, city) VALUES (?, ?, ?);`, [email, name, city],
        function(err, results){
            console.log(req.body);
            res.render('index');
        }
    )
}
module.exports = {
    getHomepage, getABC, getQuanBeoIoT, getAPI,
    postAddUser
}