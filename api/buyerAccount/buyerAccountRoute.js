'use strict';
var buyerApprovalMgr = require('./buyerApproval/buyerApprovalManager');
var buyerApprovedMgr = require('./buyerApproved/buyerApprovedManager');
module.exports = function(app) {
    app.route('/buyer/approvalList')
    .get(buyerApprovalMgr.getBuyerApprovalList);

    app.route('/buyer/approve')
    .post(buyerApprovalMgr.approveBuyer);

    app.route('/buyer/approvedList')
    .get(buyerApprovedMgr.getBuyerApprovedList);

};