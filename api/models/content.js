
var mongoose = require('mongoose');
var contentDetailModal = require('./contentDetail');

const ContentSchema = new mongoose.Schema({
    createdDate: { type: Date, default: Date.now },
    contentDescription: String,
    encryptedKey:String,
    mainContentImage: String,
    mainContentDescription:String,
    mainContentName:String,
    mainContentFileName:String,
    subContentDetail: [
      { 
        _id:Number,
      contentDetailId : Number  ,
      subContentDetailImage : String,
      subContentDetailFileName:String,
      subContentDescription:String,
      subContentName:String,
      createdDate : { type: Date, default: Date.now }
    }]
  });

  const Content = mongoose.model('Content', ContentSchema);
  module.exports=Content;