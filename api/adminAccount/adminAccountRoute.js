'use strict';
var adminLoginMgr = require('./adminLogin/adminLoginMgr');
module.exports = function(app) {
    
    app.route('/admin/create')
    .post(adminLoginMgr.create);

    app.route('/admin')
    .post(adminLoginMgr.signInToSite);
    
}