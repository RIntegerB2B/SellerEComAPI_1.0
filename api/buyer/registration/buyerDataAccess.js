'use strict';
var Buyer = require('./buyer.model');

exports.createContent = function(req, res) {
  var newBuyer = new Buyer(req.body);

  newBuyer.save(function(err, buyerData) {
    if (err)
      res.send(err);
    res.send(buyerData);
  });
};
