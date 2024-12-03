const path = require('path');
const express = require('express');
const configViewEngine = (app) => {
    //Config template engine
    app.set('views', path.join("./src", 'views'));
    app.set('view engine', 'ejs');
    // Config static file
    app.use(express.static(path.join("./src", "public")));
    app.use(express.json());
    app.use(express.urlencoded({ extended:true }));
};

module.exports = configViewEngine