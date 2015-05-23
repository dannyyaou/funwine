var NCCUeat = angular.module('NCCUeat', []);
NCCUeat.controller('gameController', function($scope, $http){
	$scope.resNow = {title:"波波恰恰",address:"116台北市文山區指南路二段48號",intro:"大馬風味餐廳",imgUrl: "img/popo2.jpg"};
	$scope.res;
	$http.get("res.json")
	.success(function(response) {
		console.log(response);
		$scope.res = response;
	});
	function randOrd(){
		return (Math.round(Math.random())-0.5); 
	}
	$scope.numOfRes = 0;
	$scope.init = function(){
		$scope.res = $scope.res.sort(randOrd);
		$scope.resNow = $scope.res[$scope.numOfRes];
	}
	$scope.changeRes = function(e){
		e.preventDefault();
		if ($scope.res.length <= $scope.numOfRes+1) {$scope.numOfRes = 0};
		$scope.numOfRes = $scope.numOfRes + 1;
		$scope.resNow = $scope.res[$scope.numOfRes];
	}
	$scope.showOverlay = function(e){
		// e.preventDefault();
		// $('.overlay').toggle();
		alert('no done');
	}
});