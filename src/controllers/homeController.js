
const getHomepage = (req, res) => {
    res.render('index.ejs');
};

const getABC = (req, res) => {
    res.send('check ABC');
}

const getQuanBeoIoT = (req, res) => {
    res.send('<h1> QuanBeoIoT </h1>');
}

module.exports = {
    getHomepage, getABC, getQuanBeoIoT
}