let router = require('express').Router();
let ecommerce = require('../../database/schema.js');

router.route('/home').get((req, res) => {
  return ecommerce
    .find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
