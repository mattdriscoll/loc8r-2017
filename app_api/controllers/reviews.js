var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonRequest = function(res, status, content) {
	res.status(status);
	res.json(content);
}

module.exports.reviewsCreate = function (req, res) {
	sendJsonRequest(res, 200, {"status" : "success"});
};
module.exports.reviewsReadOne = function (req, res) {
	sendJsonRequest(res, 200, {"status" : "success"});
};
module.exports.reviewsUpdateOne = function (req, res) {
	sendJsonRequest(res, 200, {"status" : "success"});
};
module.exports.reviewsDeleteOne = function (req, res) {
	sendJsonRequest(res, 200, {"status" : "success"});
};
