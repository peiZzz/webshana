angular.module('app')
	.controller('homeController',['$rootScope','$scope','$ionicSideMenuDelegate','api','tip',function($rootScope, $scope,$ionicSideMenuDelegate,api,tip){
		$scope.slide = {
			doesContinue:true,
			autoPlay:true,
			intervalTime:2000,
			showPager:true
		}

		tip.loadTips.showLoading();
		api.fetchGet('http://127.0.0.1:9000/home')
			.then(function(data){
				tip.loadTips.hideLoading();
				$scope.data = data.data;
				console.log('data==>',data);
			})
			.catch(function(err){
				tip.loadTips.hideLoading();
				console.log(err);
			})

		// $scope.data = [
		// 	{img: './images/home_banner_1@3x.png'},
		// 	{img: './images/home_banner_2@3x.png'},
		// 	{img: './images/home_banner_3@3x.png'}
		// ]

		// $scope.proData =[
		// 	{img:'./images/home_Salability_Series-img_1@3x.png',name:'日本sana豆乳洗面奶',class:'icon ion-social-yen',classR: 'icon ion-ios-cart',newPirce:'75.00'},
		// 	{img:'./images/home_Salability_Series-img_2@3x.png',name:'日本sana牛乳洗面奶',class:'icon ion-social-yen',classR: 'icon ion-ios-cart',newPirce:'78.00'},
		// 	{img:'./images/home_Salability_Series-img_3@3x.png',name:'日本sana绿素美背液',class:'icon ion-social-yen',classR: 'icon ion-ios-cart',newPirce:'89.00'}

		// ]

		// $scope.newData = [
		// 	{img: './images/home_New_arrival_img_1@3x.png',name: '日本sana浓缩豆乳面膜4片装',class: 'icon ion-social-yen',classR: 'icon ion-ios-cart',oldPirce:'99.00',newPirce:'89.00'},
		// 	{img: './images/home_New_arrival_img_2@3x.png',name: '日本sana双倍补水美容精华液',class: 'icon ion-social-yen',classR: 'icon ion-ios-cart',oldPirce:'120.00',newPirce:'109.00'},
		// 	{img: './images/home_New_arrival_img_3@3x.png',name: '日本sana肌因胶原喷雾化妆水',class: 'icon ion-social-yen',classR: 'icon ion-ios-cart',oldPirce:'98.00',newPirce:'90.00'},
		// 	{img: './images/home_New_arrival_img_3@3x.png',name: '日本sana肌因胶原喷雾化妆水',class: 'icon ion-social-yen',classR: 'icon ion-ios-cart',oldPirce:'98.00',newPirce:'90.00'},
		// 	{img: './images/home_New_arrival_img_5@3x.png',name: '日本sana速捷眼线笔01易画',class: 'icon ion-social-yen',classR: 'icon ion-ios-cart',oldPirce:'98.00',newPirce:'90.00'},
		// 	{img: './images/home_New_arrival_img_5@3x.png',name: '日本sana肌因胶原喷雾化妆水',class: 'icon ion-social-yen',classR: 'icon ion-ios-cart',oldPirce:'98.00',newPirce:'90.00'}
		// ]

	}])