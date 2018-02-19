var modal = require('../models/contentViewModel');
exports.getAllContentDetail = function(req, res) {
  modal.getAllContentDetail(req, res);
};

exports.createContentDetail = function(req,res){
    console.log(req.body);
    res.send(req.body);
}