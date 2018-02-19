
var mongoose = require('mongoose');
var contentDetailModal = require('./contentDetail');

const ContentSchema = new mongoose.Schema({
    clientId: { type: Number, default: 0 },
    createdDate: { type: Date, default: Date.now },
    contentDescription: String,
    encryptedKey:String,
    contentDetailId: { type: Number, default: 0 },
    contentData: String,
    contentDetailDescription:String,
    contentFileName:String,
    publishId: Number
  });

  const Content = mongoose.model('Content', ContentSchema);
  module.exports=Content;