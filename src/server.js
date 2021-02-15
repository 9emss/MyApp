const http = require('http');
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static('../public'));

// default URL website
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

const server = http.createServer(app);
const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`App Runing On Port ${PORT}`));
