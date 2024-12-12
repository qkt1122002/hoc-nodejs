require('dotenv').config();
const express = require("express");
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const connection = require('./config/database');
configViewEngine(app);

app.use('/', webRoutes);

connection()
app.listen(port, hostname, () => {
    console.log(`Listen on port ${port}`);
});
