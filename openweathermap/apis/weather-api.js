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
    //parameters: { id: {description:'the test weather id'}},

    action: function (req, resp, next) {
        //res.stream(req.model.find, req.params.id, next);

        //TODO: change the URL to display forecast in Celsius just add units=metric parameter
        // api.openweathermap.org/data/2.5/forecast/city?id=727011
        var reqUrl = 'http://api.openweathermap.org/data/2.5/forecast/city?id=727011&units=metric&APPID=5ff3b8a0950e28c63522e4aec0678aca',
            model = req.model,
            username = "ArrowTest",
            password = "12345",
            auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

        var options = {
            url: reqUrl,
            method: "GET",
            json: true,
            headers : {
                "Authorization" : auth
            }
        };
        console.log('Got so far ...')
        request(options, function callback(error, response, body) {
            if (typeof body === "undefined") {
                return new Error("Nothing found!");
            }
            if (!error && response.statusCode == 200) {
                //if we don't have {json: true} in options obj, we can use:
                //body = JSON.parse(body);

                var instance = model.instance(body, true);

                return resp.stream(instance, null, next);
            }else{
                throw new Error(body.message);
            }
        });
    }
});

module.exports = WeatherAPI;