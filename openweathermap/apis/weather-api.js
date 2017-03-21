var Arrow = require('arrow'),
	request = require('request');

//model
//var Model = Arrow.weather;
var Model = Arrow.getModel('weather');

var WeatherAPI = Arrow.API.extend({
	group: 'weatherapi',
	path: '/api/weatherapi', // /:id
	method: 'GET',
	description: 'this is an api that represent weather forecast',
	model: 'weather',
	before: 'pre_example',
	after: 'post_example',
	parameters: { //id: {description:'the test weather id'}
         },
	action: function (req, resp, next) {
		// invoke the model find method passing the id parameter
		// stream the result back as response
		var reqUrl = 'http://api.openweathermap.org/data/2.5/forecast/city?id=727011&APPID=5ff3b8a0950e28c63522e4aec0678aca';

		var options = {
			url: reqUrl,
			method: "GET",
			json: true
		};

		function callback(error, response, body) {
			if (!error && response.statusCode == 200) {
				//var info = JSON.parse(body);
				console.log(body);
			}
		}
		var result = request(options, callback);

		var newModel = Model.instance(result);

		//validator
		// newModel.save(function (err, result) {
		// 	if (!err) {
		// 		Arrow.logger.info(result);
		// 	} else {
		// 		Arrow.logger.error(error);
		// 	}
		// });

		resp.stream(newModel);
	}
});

module.exports = WeatherAPI;
