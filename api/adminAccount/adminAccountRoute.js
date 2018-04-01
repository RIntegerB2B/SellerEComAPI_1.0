'use strict';
var adminLoginMgr = require('./adminLogin/adminLoginMgr');
module.exports = function(app) {
    
   

    app.route('/admin')
    .post(adminLoginMgr.signInToSite);
    
}