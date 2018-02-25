'use strict';
var Content = require('../models/content');

exports.createContent = function(req, res) {
  var newContent = new Content(req.body);

  newContent.save(function(err, contentData) {
    if (err)
      res.send(err);
    res.send(contentData);
  });
};

exports.getContents = function(req, res) {
  Content.aggregate( [ { $group : { _id :{  "createdDate": "$createdDate",  "publishId": "$publishId" , "encryptedKey" : "$encryptedKey"} } }
  ,
  { "$sort": { "publishId": -1 } }
    ]).exec(function (err, contents) {
    if(err) {
      res.status(500).send({message: "Some error occurred while retrieving notes."});
    } else {
      contents = contents.sort(function(a, b){
        return a.publishId - b.publishId;
    });
    res.send(contents);
    }
  });

};

exports.getContentDetail = function(req, res) {
  // Retrieve and return all notes from the database.
  Content.find({'publishId': req.params.publishId},'contentDetailId contentData',function(err, contentDetail){
    if(err) {
        res.status(500).send({message: "Some error occurred while retrieving notes."});
    } else {
        res.send(contentDetail);
    }
  });
};

exports.getContentDetailForSeller = function(req, res) {
  // Retrieve and return all notes from the database.
  Content.find({'encryptedKey': req.params.encryptedKeyValue},'contentDetailId contentData',function(err, contentDetail){
    if(err) {
        res.status(500).send({message: "Some error occurred while retrieving notes."});
    } else {
        res.send(contentDetail);
    }
  });
};



exports.getAllContent = function(req, res) {
  // Retrieve and return all notes from the database.
  Content.find(function(err, contents){
      if(err) {
          res.status(500).send({message: "Some error occurred while retrieving notes."});
      } else {
          res.send(contents);
      }
  });
};


exports.getNewPublishId = function(req, res, callBack) {
  // Retrieve and return all notes from the database.
 

  Content.
  find({'clientId': '1' }).
  sort({ publishId: -1 }).
  select({ publishId: 1 }).
  limit(0).
  exec(function(err, events){
    if(events.length > 0){
      console.log(events[0].publishId);
      res.send({publishId: events[0].publishId + 1});
    }
    else{
      console.log(1);
      res.send({publishId: 1});
    }
    
});
};





