let router = require('express').Router();
let ecommerce = require('../../database/schema.js');

router.route('/:id/cart').put((req, res) => {
  let {id} = req.params
  console.log('id', id)
  return ecommerce
    .findByIdAndUpdate({_id: id}, {in_cart: true})
      .then((data) => {
        res.status(200).send(data)
      })
      .catch((err) => {
        res.status(400).send(err)
      })
})

module.exports = router;
