'use strict';

var mongoModal = require('../models/contentUploadModel');
var msModal =require('../models/contentUploadMSModel');
var rand = require("random-key");

exports.createContent = function(req, res) {
  req.body.encryptedKey = rand.generate();
  console.log(req.body);
//msModal.createContent(req,res);
mongoModal.createContent(req,res);
};

exports.getContents = function(req, res) {
  /* content.find({}, function(err, content) {
    if (err)
      res.send(err);
    res.json(content);
  }); */
  mongoModal.getContents(req, res);
 //msModal.getAllContent(req, res);
};

exports.getNewPublishId = function(req, res) {
  mongoModal.getNewPublishId(req, res, callBack);
};



exports.getContentDetail = function(req, res) {
  /* content.find({}, function(err, content) {
    if (err)
      res.send(err);
    res.json(content);
  }); */
  mongoModal.getContentDetail(req, res);
 //msModal.getContentDetail(req, res);
};

exports.getContentDetailForSeller = function(req, res) {
  mongoModal.getContentDetailForSeller(req, res);
};



exports.createContentDetail = function(req, res) {
  console.log("Inside");
  /* content.find({}, function(err, content) {
    if (err)
      res.send(err);
    res.json(content);
  }); */
 // mongoModal.getAllContent(req, res);
 msModal.createContentDetail(req, res);
};

var callBack = function(err, res){
  if(err) {
      res.status(500).send({message: "Some error occurred while retrieving notes."});
  } else {
      res.send(res.body);
  }
}

/*

exports.read_a_content = function(req, res) {
  content.findById(req.params.contentId, function(err, content) {
    if (err)
      res.send(err);
    res.json(content);
  });
};


exports.update_a_content = function(req, res) {
  content.findOneAndUpdate({_id: req.params.contentId}, req.body, {new: true}, function(err, content) {
    if (err)
      res.send(err);
    res.json(content);
  });
};


exports.delete_a_content = function(req, res) {


  content.remove({
    _id: req.params.contentId
  }, function(err, content) {
    if (err)
      res.send(err);
    res.json({ message: 'content successfully deleted' });
  });
};*/