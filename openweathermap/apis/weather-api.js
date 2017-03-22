var Arrow = require('arrow'),
    request = require('request');

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
        //res.stream(req.model.find, req.params.id, next);

        var reqUrl = 'http://api.openweathermap.org/data/2.5/forecast/city?id=727011&APPID=5ff3b8a0950e28c63522e4aec0678aca',
            model = req.model;

        var options = {
            url: reqUrl,
            method: "GET",
            json: true
        };

        request(options, function callback(error, response, body) {
            if (typeof body === "undefined") {
                return new Error("Nothing found!");
            }

            if (!error && response.statusCode == 200) {
                //var info = JSON.parse(body);
                //console.log(body);
                var instance = model.instance(body, true);

                //instance validation
                // instance.save(function (err, result) {
                // 	if (!err) {
                // 		Arrow.logger.info(result);
                // 	} else {
                // 		Arrow.logger.error("ERROR!");
                // 	}
                // });

                //console.log for test - uncomment
                //console.log(instance);
                return resp.stream(model.find, instance, next);
            }
        });
    }
});

module.exports = WeatherAPI;