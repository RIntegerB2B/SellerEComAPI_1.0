'use strict';
var AdminAccount = require('../../models/adminAccount.model');

exports.signInToSite = function(req, res) {
    AdminAccount.find({'userName': req.body.userName, 'password': req.body.password},function(err, userDetail){
    if(err) {
        res.status(500).send({message: "Some error occurred while retrieving notes."});
    } else {
        console.log(userDetail);
        res.send(userDetail);
    }
  });
  
};


exports.createContent = function(req, res) {
    var adminAccount = new AdminAccount(req.body);
  
    adminAccount.save(function(err, contentData) {
      if (err){
        res.send(err);
        console.log(err);
      }
      else{
        res.send(contentData);
        console.log(contentData);
      }
    });
};

