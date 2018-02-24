'use strict';
var Buyer = require('../../models/buyer');

exports.getBuyerApprovedList = function(req, res) {
  // Retrieve and return all notes from the database.
  Buyer.find({'approvedBySeller': 1},'_id firstName lastName phoneNumber city state',function(err, buyerList){
    if(err) {
        res.status(500).send({message: "Some error occurred while retrieving."});
    } else {
        res.send(buyerList);
    }
  });
};


