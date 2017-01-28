// GET 'Home' page
module.exports.homelist = function(req, res) {
	res.render('locations-list', { 
		title: 'Loc8r - find a place to work with wifi' ,
		pageHeader: {
			title: 'Loc8r',
			strapline: 'Find places to work with wifi near you!'
		},
		sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about.  Perhaps with coffee, cake, or a pint? Let Loc8r help you're find the place youre looking for.",
		locations: [{
			name: 'Starbucks',
			address: '4340 Little Rd, Arlington, TX 76016',
			rating: 3,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '100m'
		},{
			name: 'American Tea & Spice',
			address: '4340 Little Rd, Arlington, TX 76016',
			rating: 5,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '100m'
		},{
			name: 'Tea2Go',
			address: '4340 Little Rd, Arlington, TX 76016',
			rating: 1,
			facilities: ['Meh drinks', 'No Food', 'Shitty wifi', 'Douche owner'],
			distance: '100m'
		}]
	});
};

// GET 'Location Info' page
module.exports.locationInfo = function(req, res){
	res.render('location-info', {
		title: 'Location Info',
		location: "Starbucks",
		address: "4340 Little Rd, Arlington, TX 76016",
  	rating: 5,
  	hours: [{
  		day: 'Monday - Friday',
  		hours: '7:00am - 7:00pm'
  	},{
      day: 'Saturday',
      hours: '8:00am - 5:00 pm'
  	},{
      day: 'Sunday',
      hours: 'closed'
  	}],
  	facilities: [
  	  'Hot drinks',
  	  'Food',
  	  'Premium wifi'
  	],
  	mapCoords: [{
      lat: '32.6778911',
      lon: '-97.1975544'
  	}],
  	reviews: [{
  		reviewer: 'Simon Holmes',
  		date: 'July 16, 2013',
  		rating: 5,
  		content: "What a great place.  I can't say enough good things about it."
  	}, {
  		reviewer: 'Charlie Chaplin',
  		date: 'June 16, 2013',
  		rating: 3,
  		content: "It was ok. Coffee wasn't great, but the wifi was fast."
  	}]
	});
};

// GET 'Add Review' page
module.exports.addReview = function(req, res){
  res.render('location-review', { 
  	title: 'Write a Review',  	
  	location: {
  		name: 'Starbucks'
  	}
  });
};
