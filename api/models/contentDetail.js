
var mongoose = require('mongoose');

const ContentDetailSchema = new mongoose.Schema({
  contentDetailId: { type: Number, default: 0 },
  contentData: String,
  description:String
  });

  const ContentDetail = mongoose.model('ContentDetail', ContentDetailSchema);
  module.exports=ContentDetail;