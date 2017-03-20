var Arrow = require('arrow'),
	server = new Arrow();

// lifecycle examples
server.on('starting', function () {
	server.logger.debug('server is starting!');
});

server.on('started', function () {
	server.logger.debug('server started!');
});

//CUSTOMIZING THE BUILT-IN JSON FORMATTER
// Arrow.Formation.formatters.json = function jsonFormatter(req, resp, body, singular, plural, callback) {
// 	resp.set('Content-Type', 'application/json');
// 	if (typeof body === 'object') {
// 		body.customized = true;
// 		callback(null, JSON.stringify(body));
// 	} else {
// 		callback(null, body);
// 	}
// };

// start the server
server.start();
