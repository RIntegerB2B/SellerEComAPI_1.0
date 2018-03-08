var categoryDA = require('./categoryDA');
exports.createCategory = function(req, res) {
    categoryDA.createCategory(req, res);
};
exports.getMainCategory = function(req, res) {
    categoryDA.getMainCategory(req, res);
};
exports.createSubCategory = function(req, res) {
    categoryDA.createSubCategory(req, res);
};
exports.getSubCategory = function(req, res) {
    categoryDA.getSubCategory(req, res);
};



