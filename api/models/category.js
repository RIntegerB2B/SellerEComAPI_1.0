
var mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    _id: { type: Number, default: 1 },
    categoryId:Number,
    headerCategory: Number,
    categoryName: String,
    subCategories: [{_id:Number, subCategoryName:String}]
  });

  const Category = mongoose.model('Category', CategorySchema);
  module.exports=Category;