var App = angular.module("Checkbox", []);

App.controller("checkboxController", ["$scope",function($scope){

$scope.dateSondClub = [
	{
		id: "id1",
		checked: false,
		noSond: true,
		medianame: "media1",
		datesondage: {
			date1 : {
				pige: "0"
			}
		}
		
	},
	{
		id: "id2",
		checked: false,
		noSond: true,
		medianame: "media2",
		datesondage: {
			date2 : {
				pige: "1"
			}
		}
		
	},
	{
		id: "id3",
		checked: false,
		noSond: true,
		medianame: "media3",
		datesondage: {
			date3 : {
				pige: "0"
			}
		}
		
	},
	{
		id: "id4",
		checked: false,
		noSond: true,
		medianame: "media4",
		datesondage: {
			date1 : {
				pige: "0"
			},
			date2 : {
				pige: "0"
			},
			date4 : {
				pige: "0"
			}
		}
		
	}
]

$scope.datesSondage = [
	'date1',
	'date2',
	'date3',
	'date4'
]

$scope.clearCheck = function(datas, index){
	
	// data.noSond = false;
	// data.checked = true;
	// console.log(data);

	angular.forEach(datas, function(value, key){
		if(index != key ){
			value.noSond = false;
		}
	});
}



}
]);