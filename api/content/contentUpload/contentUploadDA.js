'use strict';
var Content = require('../../models/content');

exports.createContent = function(req, res) {
    var newContent = new Content(req.body);
  
    newContent.save(function(err, contentData) {
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

exports.createSubContent = function(req, res) {
  var newSubContent = new Content();
  Content.find({'_id' : req.params.mainContentId}).select('subContentDetail').exec(function(err, subContentDetailData){
    if(err) {
        res.status(500).send({message: "Some error occurred while retrieving notes."});
    } else {
      let subContent ='';
      if(subContentDetailData.length>0 && subContentDetailData[0].subContentDetail)
        subContent = {_id: subContentDetailData[0].subContentDetail.length + 1 , subContentDetailImage : req.body.subContentDetailImage};
      else{
          subContent = [{_id: 1 , subContentDetailImage : req.body.subContentDetailImage}];
      }
      Content.update(
        { _id: req.params.mainContentId }, 
        { $push: { subContentDetail : subContent }},
        function(err, data) {
          if (err){
            res.send(err);
            console.log(err);
          }
          else{
            res.send(data);
          }
      });
    }
  }); 

  
};

exports.getAllContentId = function(req, res) {
  Content.find({},'_id mainContentName',function(err, contentIds){
    if(err) {
        res.status(500).send({message: "Some error occurred while retrieving notes."});
    } else {
      res.send(contentIds);
    }
  });

};

exports.getNewPublishId = function(req, res, callBack) {
  Content.
  find({}).
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