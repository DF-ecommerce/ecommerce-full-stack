let router = require('express').Router();
let ecommerce = require('../../database/schema.js');

router.route('/data').get((req, res) => {
  return ecommerce
    .find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.route('/search/:query').get((req, res) => {
  let { query } = req.params;
  return ecommerce
    .find( { "product_name": new RegExp(query, "is") })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
