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
				dt: { type: Date, description: 'Time of data forecast', required: true },
				temp: { type: Number, description: 'Temperature', required: true },
				temp_min: { type: Number, description: 'Minimum temperature at the moment of calculation', required: true },
				temp_max: { type: Number, description: 'Maximum temperature at the moment of calculation', required: true },
				humidity: { type: Number, description: 'Humidity, %', required: true }
		    },
			weather: {
				main: { type: String, description: 'Group of weather parameters (Rain, Snow, Extreme etc.)', required: true },
				description: { type: String, description: 'Weather condition within the group', required: true },
				icon: { type: true, description: 'Weather icon id', required: true }
			},
			clouds: {
				all: { type: Number, description: 'Cloudiness, %', required: true }
			},
			wind: {
				speed: { type: Number, description: 'Wind speed. Unit Default: meter/sec', required: true },
				deg: { type: Number, description: 'Wind direction, degrees', required: true }
			},
			rain: {
				volume: { type: Number, description: 'Rain volume for last 3 hours, mm', name: 'volume', required: true }
			},
			snow: {
				snowing: { type: Number, description: 'Snow volume for last 3 hours', name: 'snowing', required: true }
			},
			dt_txt: { type: String, description: 'Data/time of caluclation', required: true }
		}
	},
	connector: 'memory' //'appc.arrowdb'
});

module.exports = Weather;