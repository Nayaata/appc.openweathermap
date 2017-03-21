var Arrow = require('arrow');

var WeatherRoute = Arrow.Router.extend({
	name: 'weather',
	path: '/weather',
	method: 'GET',
	description: 'this is an weather web route',
	action: function (req, resp, next) {
		//TODO: comment that later
		resp.render('weather');

		//getAPI('api/weather);
		req.server.getAPI('api/weatherapi', 'GET').execute({}, function(err, results) {
			if (err) {
				next(err);
			} else {
				req.log.info('weathers ' + JSON.stringify(results));
				resp.render('weather', results);
			}
		});
	}
});

module.exports = WeatherRoute;
