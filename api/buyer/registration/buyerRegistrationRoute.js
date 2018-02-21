'use strict';
var buyerRegMgr = require('./buyerRegistrationManager');
module.exports = function(app) {
    app.route('/buyer')
    .post(buyerRegMgr.createBuyer);
}