let router = require('express').Router();
let ecommerce = require('../../database/schema.js');

router.route('/inCart').get((req, res) => {
  return ecommerce.find({ in_cart: true })
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    res.status(400).send(err)
  })
});

router.route('/:id/addtocart').put((req, res) => {
  let { id } = req.params;
  return ecommerce
    .findByIdAndUpdate({ _id: id }, { in_cart: true })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.route('/:id/removefromcart').put((req, res) => {
  let { id } = req.params;
  return ecommerce
    .findByIdAndUpdate({ _id: id }, { in_cart: false })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
