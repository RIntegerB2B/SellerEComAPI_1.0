'use strict';
var contentUploadMgr = require('./contentUpload/contentUploadMgr');
var categoryMgr = require('./category/categoryMgr');
module.exports = function(app) {
    app.route('/content')
    .post(contentUploadMgr.createContent);
    app.route('/content/:mainContentId')
    .post(contentUploadMgr.createSubContent);
    app.route('/contentId')
    .get(contentUploadMgr.getAllContentId);
    app.route('/category')
    .post(categoryMgr.createCategory)
    .get(categoryMgr.getMainCategory);
    app.route('/subCategory/:mainCatId')
    .post(categoryMgr.createSubCategory)
    .get(categoryMgr.getSubCategory);

}