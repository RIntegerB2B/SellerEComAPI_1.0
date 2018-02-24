var buyerApprovalDataAccess = require('./buyerApprovalDataAccess');
exports.createBuyer = function(req, res) {
    buyerApprovalDataAccess.createBuyer(req, res);
};
exports.getBuyerApprovalList = function(req, res) {
    buyerApprovalDataAccess.getBuyerApprovalList(req, res);
};

exports.approveBuyer = function(req, res) {
    buyerApprovalDataAccess.approveBuyer(req, res);
};


