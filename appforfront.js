var NCCUeat = angular.module('NCCUeat', []);

NCCUeat.controller('gameController', function($scope, $http){
 	
 	function randOrd(){
		return (Math.round(Math.random())-0.5); 
	}
	$scope.foodList = [{name: '鹽酥雞', id:1},{name: '微笑PASTA', id:2},{name: '牛排', id:3},{name: '起司蛋糕', id:4},{name: '佛跳牆', id:5}];

 	//intialiaziton
	$scope.init = function() {
		$scope.ngshow = {
			searchDivShow : false,
			wineInfoShow : false
		};
		$scope.searchDivShow = false; 
		$scope.userSuggestion = true;
		$scope.foodList = $scope.foodList.sort(randOrd);
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
		$scope.getRidShow();
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
	$scope.numOfRes = 0;
	$scope.changeChooseFood = function(con){
		if ($scope.foodList.length <= $scope.numOfRes+1) {$scope.numOfRes = 0};
		$scope.numOfRes = $scope.numOfRes + 1;
		$scope.currfood = $scope.foodList[$scope.numOfRes];
		if (con) {
			console.log('done');
		};
	}
	//wineInfo頁面
	$scope.wineInfo = {
		name: '梅洛(Merlot)',
		like: 128,
		point: 9.8,
		price: 1380,
		year: 1980,
	}

	//allItemForSearch
	$scope.allList = ['牛排', '佛跳牆', '酷酷紅酒', '林意願', 'ted', 'Danny Yao', 'Wade Lee', "zizi"];
	//search click
	$scope.searchResultClick = function($event,wineid){
		$scope.ngshow.searchDivShow = false;
		$scope.ngshow.wineInfoShow = true ;
	}








});