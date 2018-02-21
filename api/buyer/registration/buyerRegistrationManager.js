var buyerRegistrationDataAccess = require('./buyerRegistrationDataAccess');
exports.createBuyer = function(req, res) {
    buyerRegistrationDataAccess.createBuyer(req, res);
};