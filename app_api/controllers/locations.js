var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var theEarth = (function(){
	var earthRadius = 6371; //km
	var mToKm = function(distance) {
    return parseFloat(distance / 1000);
  };
  var kmToM = function(distance) {
    return parseFloat(distance * 1000);
  };
  var kmToMil = function(distance) {
  	return parseFloat(distance * 1609.34);
  };
  var milToKm = function(distance) {
    return parseFloat(distance * 0.621371);
  };
  var getDistanceFromMeters = function(distance){
  	return parseFloat(distance * earthRadius);
  };
  return {
    mToKm : mToKm,
    kmToM : kmToM,
    kmToMil : kmToMil,
		milToKm : milToKm
  };
})();

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
}

module.exports.locationsListByDistance = function (req, res) {
	var lng = parseFloat(req.query.lng);
	var lat = parseFloat(req.query.lat);
	var point = {
		type: "Point",
		coordinates: [lng, lat]
	};
	var geoOptions = {
		spherical: true,
		maxDistance: theEarth.milToKm(20),
		num: 10
	};
	if (!lng || !lat) {
		sendJsonResponse(res, 404, { 
			'message' : 'lng and lat query parameters are required'
		});
		return;
	};
	Loc.geoNear(point, geoOptions, function(err, results, stats){
    var locations = [];
    if (err) {
    	sendJsonResponse(res, 404, err);
    } else {
	    results.forEach(function(doc) {
	    	locations.push({
	    		distance: theEarth.milToKm(doc.dis),
	    		name: doc.obj.name,
	    		address: doc.obj.address,
	    		rating: doc.obj.rating,
	    		facilities: doc.obj.facilities,
	    		_id: doc.obj._id
	    	});
	    });
	    sendJsonResponse(res, 200, locations);
	  }
	});
};

module.exports.locationsCreate = function (req, res) {
	sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.locationsReadOne = function (req, res) {
	if (req.params && req.params.locationid) {
		Loc
		  .findById(req.params.locationid)
		  .exec(function(err, location) {
		  	if (!location) {
		  		sendJsonResponse(res, 404, { "message" : "locationid not found" });
		  		return;
		  	} else if (err) {
		  		sendJsonResponse(res, 404, err);
		  		return;
		  	}
		  	sendJsonResponse(res, 200, location);
		  });
	} else {
		sendJsonResponse(res, 404, { "message" : "No locationid in request" });
	}
};

module.exports.locationsUpdateOne = function (req, res) {
	sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.locationsDeleteOne = function (req, res) {
	sendJsonResponse(res, 200, {"status" : "success"});
};