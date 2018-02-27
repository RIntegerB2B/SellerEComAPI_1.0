'use strict';
var Buyer = require('../../models/buyer');

exports.getBuyerApprovalList = function(req, res) {
  // Retrieve and return all notes from the database.
  Buyer.find({'approvedBySeller': 2},'_id firstName lastName phoneNumber city state',function(err, buyerList){
    if(err) {
        res.status(500).send({message: "Some error occurred while retrieving."});
    } else {
        res.send(buyerList);
    }
  });
};

exports.approveBuyer = function(req, res) {
  
  Buyer.update({_id: req.body._id}, {
    approvedBySeller: req.body.approvedBySeller
    }, function(err, affected, resp) {
          console.log(resp);
          res.send(affected);
        })
};
