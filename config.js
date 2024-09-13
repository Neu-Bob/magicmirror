/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: 'MMM-Teslamate',
			position: 'bottom_right',
			config: {
				mqttServer: {
					address: '192.168.86.103',  // Server address or IP address of the MQTT broker
					port: 1883,              // Port number if other than default (1883)
				},
		
				rangeDisplay: "%",
				imperial: true,
		
				carID: '2',
				hybridView: true,
				// size of the visible area
				sizeOptions: {
					width: 450, // px, default: 450
					height: 203, // px, default: 203
					batWitdh: 250, // px, default: 250
					batHeight: 75, // px, default: 75
					topOffset: -40, // px, default: -40
				},
				displayOptions: {
					odometer: {
						visible: true,
						fontSize: null,
					},
					batteryBar: {
						visible: true,
						topMargin: 0, 
					},
					temperatureIcons: {
						topMargin: 0, 
					}
				},
				carImageOptions: {
					model: "my", // mx, ms (S pre-refresh), ? (S post-refresh)
					view: "STUD_3QTR", // STUD_SIDE works better for S/X
					// full list of option codes: https://tesla-api.timdorr.com/vehicle/optioncodes.
					// you need at least the color and the wheels. not all combos work.
					// also consult: https://teslaownersonline.com/threads/teslas-image-compositor.7089/
					options: "PMNG,WY20P",
		
					// play with this until it looks about right.
					// tested values: 0 for m3/STUD_3QTR, 25 for ms/STUD_SIDE
					verticalOffset: 0,
		
					opacity: 0.5
				},
		
				// show inside and outside temperatures below the car image: when AC or preconditioning is running (default), always, or never
				showTemps: "always", // "always", "never"
		
				// time in seconds to wait before re-rendering the module on incoming data. prevents high CPU load due to re-rendering on every new data point during driving
				updatePeriod: 5,
			}
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},		
		// {
		// 	module: "calendar",
		// 	header: "US Holidays",
		// 	position: "top_left",
		// 	config: {
		// 		calendars: [
		// 			{
		// 				fetchInterval: 7 * 24 * 60 * 60 * 1000,
		// 				symbol: "calendar-check",
		// 				url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
		// 			}
		// 		]
		// 	}
		// },
		{
			module: "compliments",
			position: "lower_third"
		},
		// {
		// 	module: "weather",
		// 	position: "top_right",
		// 	config: {
		// 		weatherProvider: "openmeteo",
		// 		type: "current",
		// 		lat: 34.022305,
		// 		lon: -84.6824603
		// 	}
		// },
		// {
		// 	module: "weather",
		// 	position: "top_right",
		// 	header: "Weather Forecast",
		// 	config: {
		// 		weatherProvider: "openmeteo",
		// 		type: "forecast",
		// 		lat: 34.022305,
		// 		lon: -84.6824603
		// 	}
		// },
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "WSJ",
						url: "https://feeds.a.dj.com/rss/RSSWorldNews.xml"
					},
					{
						title: "WSJ Technology",
						url: "https://feeds.a.dj.com/rss/RSSWSJD.xml"
					},
					{
						title: "WSJ Market News",
						url: "https://feeds.a.dj.com/rss/RSSMarketsMain.xml"
					},
					{
						title: "WSJ Lifestyle",
						url: "https://feeds.a.dj.com/rss/RSSLifestyle.xml"
					},
					{
						title: "Fox Headlines",
						url: "https://moxie.foxnews.com/google-publisher/latest.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
