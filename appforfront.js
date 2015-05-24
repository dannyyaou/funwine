var NCCUeat = angular.module('NCCUeat', []);

NCCUeat.controller('gameController', function($scope, $http){
	$scope.http = function(url){
		$http.get(url)
    .success(function(response) {
      return response;
    });
	}

 	$scope.okItem = [{name:'貴族世家',address:'新北市土城區學府路一段'}, {name:'貴族世家家星勝',address:'台北市文山區指南路二段64號'}];
 	$scope.okItembay = [];
 	function randOrd(){
		return (Math.round(Math.random())-0.5); 
	}
	$scope.foodList = [{name: '鹽酥雞', id:1},{name: '微笑PASTA', id:2},{name: '牛排', id:3},{name: '起司蛋糕', id:4},{name: '佛跳牆', id:5}];

 	//intialiaziton
	$scope.init = function() {
		$scope.ngshow = {
			searchDivShow : false,
			wineInfoShow : false,
			bigpageshow: false
		};
		$scope.myPlace = "台灣大學";
		$scope.searchDivShow = false; 
		$scope.userSuggestion = true;
		$scope.foodList = $scope.foodList.sort(randOrd);
	}

	//回到第一層頁面
	$scope.getRidShow = function(){
		$scope.ngshow = {
			searchDivShow : false,
			wineInfoShow : false,
			bigpageshow: false
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
		non: '20%',
		master: 'Rosa JJ',
		ju: '姚哥酒莊',
		liaun: '500cc',
		lia: '小麥,大賣',
		color: 'green',
		sweet:'不甜'
	}

	//allItemForSearch
	$scope.allList = ['牛排', '佛跳牆', '酷酷紅酒', '林意願', 'ted', 'Danny Yao', 'Wade Lee', "zizi"];
	//search click
	$scope.searchResultClick = function($event,wineid){
		$scope.ngshow.searchDivShow = false;
		$scope.ngshow.wineInfoShow = true ;
	}

		$scope.toRadians = function(degree) {
    	return degree * Math.PI /180 ;  
 		};
    $scope.getDistanceOf = function(latitude1,longitude1,latitude2,longitude2) {
		  var R=6371;
    	var deltalatitude = $scope.toRadians(latitude2-latitude1);
    	var detalongitude = $scope.toRadians(longitude2-longitude1);
    	latitude1 = $scope.toRadians(latitude2);
    	var a = Math.sin(deltalatitude/2) * Math.sin(deltalatitude/2) + Math.cos(latitude1) * Math.cos(latitude2) * Math.sin(detalongitude/2) * Math.sin(detalongitude/2);
    	var c = 2 * Math.atan(Math.sqrt(a),Math.sqrt(1-a));
    	var d = R * c;
    	return d;
		};
		 $scope.getDistance = function(addressA,addressB,stuff){
	              var geocoder = new google.maps.Geocoder();
	              var addressAp = {};
	              var addressBp = {};
                geocoder.geocode({
                    "address": addressA
                }, function (results, status) {
					
                    if (status == google.maps.GeocoderStatus.OK) {
                    	addressAp.a = results[0].geometry.location.A;
                    	addressAp.b = results[0].geometry.location.F;
                    } else {
											console.log('something went wrong!');
                    }
                });
                geocoder.geocode({
                    "address": addressB
                }, function (results, status) {
					
                    if (status == google.maps.GeocoderStatus.OK) {
                    	addressBp.a = results[0].geometry.location.A;
                    	addressBp.b = results[0].geometry.location.F;
                			var distance = new GLatLng(addressAp.a, addressAp.b).distanceFrom(new GLatLng(addressBp.a,addressBp.b));  
  		  							var dis = parseInt(distance/1000,10);
  		  							if (dis<10) {
  		  								$scope.okItembay.push(stuff);
  		  								console.log($scope.okItembay);
  		  							};
                    } else {
											console.log('something went wrong!');
                    }
                });
    }

	$scope.goBuy = function(){
		// var res = $scope.http(url);
		// $scope.okItem = [];
		// $scope.okItembay = [];
		res = [{name:'貴族世家',address:'新北市土城區學府路一段'}, {name:'貴族世家家星勝',address:'台北市文山區指南路二段64號'}];
		for (var i = 0; i < res.length; i++) {
    	$scope.getDistance($scope.myPlace,res[i].address,res[i]);
    };
    setTimeout(function(){$scope.okItem = $scope.okItembay;console.log($scope.okItem);},2000);
    $scope.ngshow.bigpageshow = true;
	}








});