var contentUploadDA = require('./contentUploadDA');
exports.createContent = function(req, res) {
    contentUploadDA.createContent(req, res);
};

exports.createSubContent = function(req, res) {
    contentUploadDA.createSubContent(req, res);
};

exports.getAllContentId = function(req, res) {
    contentUploadDA.getAllContentId(req, res);
};




