var NCCUeat = angular.module('NCCUeat', []);

NCCUeat.controller('gameController', function($scope, $http){
 	
 	//intialiaziton
	$scope.init = function() {
		$scope.ngshow = {
			searchDivShow : false,
			wineInfoShow : false
		};
		$scope.searchDivShow = false; 
		$scope.userSuggestion = true;
	}

	//回到第一層頁面
	$scope.getRidShow = function(){
		$scope.ngshow = {
			searchDivShow : false,
			wineInfoShow : false
		};
	}

	//顯示個別酒頁面
	$scope.showWineInfo = function(e,wineid){
		e.preventDefault();
		$scope.ngshow.wineInfoShow = true;
	}

	//換頁面
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

	//search bar
	$scope.searchFocus = function(){
		$scope.ngshow.searchDivShow = true; 
	}
	$scope.searchDivHide = function(){
		$scope.ngshow.searchDivShow = false; 
	}

	//個人頁面變化下方商品內容
	$scope.changeProProduct = function(ob){
		if (ob == 'h') {
			$('.history_wine_btn').addClass('active');
			$('.seg_wine_btn').removeClass('active');
			$scope.userSuggestion = false;
		}
		else if (ob == 's') {
			$('.history_wine_btn').removeClass('active');
			$('.seg_wine_btn').addClass('active');
			$scope.userSuggestion = true;
		}
	}

	$scope.currfood = {
		name: "鹽酥雞",
		id:1
	}
	//change 喜翻 food

});