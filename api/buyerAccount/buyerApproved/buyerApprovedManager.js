var buyerApprovedDataAccess = require('./buyerApprovedDataAccess');
exports.getBuyerApprovedList = function(req, res) {
    buyerApprovedDataAccess.getBuyerApprovedList(req, res);
};



