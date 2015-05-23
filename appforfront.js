var NCCUeat = angular.module('NCCUeat', []);

NCCUeat.controller('gameController', function($scope, $http){
	$scope.wineid = location.search.split('?wineid=')[1];
	$scope.ngshow = {
		searchDivShow : false,
		wineInfoShow : false
	};
	$scope.getRidShow = function(){
		$scope.ngshow = {
			searchDivShow : false,
			wineInfoShow : false
		};
	}
	$scope.changePage = function(num,e){
		e.preventDefault();
		//page show
		$('.showpage').removeClass('showpage');
		$('.page'+num).addClass('showpage');
		//icon change - change first
		var a = $('.activeNavIcon').attr('src');
		var achange = a.split('-');
		$('.activeNavIcon').attr('src', achange[0]+'.png');
		$('.activeNavIcon').removeClass('activeNavIcon');
		//icon change - change first
		$('.page'+num+'icon').addClass('activeNavIcon');
		$('.page'+num+'icon').attr('src','img/icon'+num+'-a.png');
	}

	$scope.searchDivShow = false; 

	$scope.searchFocus = function(){
		$scope.ngshow.searchDivShow = true; 
	}
	$scope.searchDivHide = function(){
		$scope.ngshow.searchDivShow = false; 
	}


});