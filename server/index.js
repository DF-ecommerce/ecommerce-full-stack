const express = require('express');
const path = require('path');
const app = express();
const port = 3030;
const bodyParser = require('body-parser');
const router = require('./router/mainRouter.js');

// app.get('/', (req, res) => res.send('Hello World!')) // initial route
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname + '/../client/dist')))
app.use(router)
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


