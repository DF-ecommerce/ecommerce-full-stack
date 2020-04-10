const express = require('express');
const path = require('path');
const app = express();
const port = 3030;
const bodyParser = require('body-parser');
const mainRouter = require('./router/mainRouter.js');
const updateCartRouter = require('./router/updateCartRouter.js')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.use('/main', mainRouter);
app.use('/update', updateCartRouter)




app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
