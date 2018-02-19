'use strict';
module.exports = function(app) {
  var contentView= require('../controllers/contentViewController');

  // todoList Routes
  app.route('/contentDetail')
    .get(contentView.getAllContentDetail)
    .post(contentView.createContentDetail);

};