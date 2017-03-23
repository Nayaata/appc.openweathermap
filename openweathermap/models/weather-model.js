var Arrow = require('arrow');

var Weather = Arrow.createModel('weather', {
	fields: {
		city: {
			id: { type: Number, description: 'City ID', required: true },
			name: { type: String, description: 'City name', required: true },
			coord: {
				lat: { type: Number, description: 'City geo location, latitude', required: true },
				lon: { type: Number, description: 'City geo location, longitude', required: true }
			},
			country: { type: String, description: 'Country code (GB, JP etc.)', required: true }
		},
		list: {
			main: {
				temp_min: { type: Number, description: 'Minimum temperature at the moment of calculation', required: true },
				temp_max: { type: Number, description: 'Maximum temperature at the moment of calculation', required: true }
		    }
		}
	},
	connector: 'memory' //'appc.arrowdb'
});

module.exports = Weather;