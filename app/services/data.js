/*
 * Data service
 */
angular.module('app').factory('data', [
	'$rootScope',
	'$filter',
	function($rootScope, $filter) {
	
		
		
		// methods
		var GetEvents = function(params) {

			var key = '0AhwOls2FTsDFdFctVktCUm41VUpGaVV4SnNwRlBJYVE';

			var parseByDate = function (model) {
				var events = model.elements;
				var newEvents = [];

				for (var i in events) {
					var found = false;

					for (var j in newEvents) {

						if (newEvents[j].date === events[i].date) {
							found = true;

							//merge events
							newEvents[j].allEvents = newEvents[j].allEvents.concat(events[i]);

							break;
						}
					}

					if (false === found) {
						var o = {
							date: events[i].date,
							allEvents: [events[i]]
						}
						newEvents.push(o);
						
					}
				}

				return newEvents;
			}

			var parseByLocation = function (model) {
				var newEvents = model;
				return newEvents;
			}

			var showInfo = function (response) {
				//console.log(response);
				var newEvents;
				var newEvents2 = [];
				for (var i in response) {
					newEvents = parseByDate(response[i]);
				}
				
				for (var j in newEvents) {
					newEvents2.push(parseByLocation(newEvents[j]));
				}
			}


			Tabletop.init({
				key: key,
				callback: showInfo,
			});
			
		
		};
		
		return {
			GetEvents: GetEvents
		}
		
	}
]);
