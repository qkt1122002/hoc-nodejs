require('dotenv').config();
const express = require("express");
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const connection = require('./config/database');
const { default: mongoose } = require('mongoose');
configViewEngine(app);

app.use('/', webRoutes);

const kitty = new mongoose.Schema({
    name: String
});
const Kitten = mongoose.model('Kitten', kitty);
const cat = new Kitten({name: 'Quan Beo IoT Cat'});
cat.save();

(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Listen on port ${port}`);
        });
    } catch (error) {
        console.log("Error: ", error);
        
    }
})();
