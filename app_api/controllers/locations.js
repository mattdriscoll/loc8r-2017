var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonRequest = function(res, status, content) {
	res.status(status);
	res.json(content);
}

module.exports.locationsListByDistance = function (req, res) {
	sendJsonRequest(res, 200, {"status" : "success"});
};
module.exports.locationsCreate = function (req, res) {
	sendJsonRequest(res, 200, {"status" : "success"});
};
module.exports.locationsReadOne = function (req, res) {
	sendJsonRequest(res, 200, {"status" : "success"});
};
module.exports.locationsUpdateOne = function (req, res) {
	sendJsonRequest(res, 200, {"status" : "success"});
};
module.exports.locationsDeleteOne = function (req, res) {
	sendJsonRequest(res, 200, {"status" : "success"});
};