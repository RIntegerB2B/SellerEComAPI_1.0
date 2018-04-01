var adminLoginDA = require('./adminLoginDA');
exports.signInToSite = function(req, res) {
    adminLoginDA.signInToSite(req, res);
};

exports.create = function(req, res) {
    adminLoginDA.createContent(req, res);
};


