'use strict';
var Category = require('../../models/category');

exports.createCategory = function(req, res) {
  var newCategory = new Category(req.body);
  Category.
  find({}).
  sort({ _id: -1 }).
  select({ _id: 1 }).
  limit(1).
  exec(function(err, category){
    if(category.length > 0){
      console.log(category[0]._id);
      newCategory._id=category[0]._id+1;
    }
    else{
      console.log(1);
      newCategory._id=1;
    }
    newCategory.save(function(err, catData) {
      if (err){
        res.send(err);
        console.log(err);
      }
      else{
        res.send({_id: newCategory._id});
        console.log(newCategory._id);
      }
    });
    
  });

};

exports.createSubCategory = function(req, res) {
  var newSubCategory = new Category();
  Category.find({'_id' : req.params.mainCatId}).select('subCategories').exec(function(err, subCategoriesData){
    if(err) {
        res.status(500).send({message: "Some error occurred while retrieving notes."});
    } else {
      console.log(subCategoriesData);
      let subCategory ='';
      if(subCategoriesData.length>0 && subCategoriesData[0].subCategories)
         subCategory = {_id: subCategoriesData[0].subCategories.length + 1 , subCategoryName : req.body.subCategoryName};
        else{
           subCategory = [{_id: 1 , subCategoryName : req.body.subCategoryName}];
        }
        Category.update(
          { _id: req.params.mainCatId }, 
          { $push: { subCategories : subCategory }},
          function(err, data) {
            if (err){
              res.send(err);
              console.log(err);
            }
            else{
              res.send(data);
              console.log(data);
            }
        });
    }
  }); 

  
};

exports.getMainCategory = function(req, res) {
  // Retrieve and return all notes from the database.
  Category.find().select('_id categoryName').exec(function(err, categories){
    if(err) {
        res.status(500).send({message: "Some error occurred while retrieving notes."});
    } else {
        res.send(categories);
    }
  });
};

exports.getSubCategory = function(req, res) {
  // Retrieve and return all notes from the database.
  Category.find({_id:req.params.mainCatId}).select('subCategories').exec(function(err, subCategories){
    if(err) {
        res.status(500).send({message: "Some error occurred while retrieving notes."});
    } else {
        res.send(subCategories[0].subCategories);
    }
  });
};
