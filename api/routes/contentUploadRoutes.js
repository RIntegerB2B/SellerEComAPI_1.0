'use strict';
module.exports = function(app) {
  var contentUpload = require('../controllers/contentUploadController');

  // MYSql Routes
  /*app.route('/contents')
    .get(contentUpload.getContents)
    .post(contentUpload.createContent);

    app.route('/contents/contentDetail')
    .post(contentUpload.createContentDetail);

    app.route('/contents/contentDetail/:contentId')
    .get(contentUpload.getContentDetail) */


    app.route('/contents/:clientId')
    .get(contentUpload.getContents)
    app.route('/contents')
    .post(contentUpload.createContent);
    app.route('/contents/publishId/:clientId')
    .get(contentUpload.getNewPublishId)
    

    app.route('/contents/contentDetail/:publishId')
    .get(contentUpload.getContentDetail)

    app.route('/contents/contentDetail/buyer/:encryptedKeyValue')
    .get(contentUpload.getContentDetailForSeller)
};