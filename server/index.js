const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3030;
const bodyParser = require('body-parser');
const mainRouter = require('./router/mainRouter.js');
const updateCartRouter = require('./router/updateCartRouter.js')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.use('/main', mainRouter);
app.use('/cart', updateCartRouter)

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname), '../client/dist/')
})


app.listen(PORT, () =>
  console.log(`D&F listening at http://localhost:${PORT}`)
);
