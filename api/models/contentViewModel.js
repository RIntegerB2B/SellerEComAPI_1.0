var ContentDetail = require('../models/contentDetail');

exports.getAllContentDetail = function(req, res) {
  // Retrieve and return all notes from the database.
  
  ContentDetail.find(function(err, contentDetail){
      if(err) {
          res.status(500).send({message: "Some error occurred while retrieving notes."});
      } else {
          res.send(contentDetail);
      }
  });
  var contentDetail = new ContentDetail({userId: 1 , FirstName: "Preveen"});
  /*contentDetail.save(function(err, data) {
    console.log(data);
    if(err) {
        console.log(err);
        res.status(500).send({message: "Some error occurred while creating the Note."});
    } else {
       // res.send(data);
    }
  }); */
};