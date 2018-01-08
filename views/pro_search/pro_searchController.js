angular.module('app')
	.controller('pro_searchController',['$scope','$ionicSideMenuDelegate',function($scope,$ionicSideMenuDelegate){
		$scope.data = [
			{name:'全部', isActive: true},
			{name:'店铺', isActive: false},
			{name:'攻略', isActive: false},
			{name:'优品', isActive: false},
			{name:'挑尖货', isActive: false}
		]
		$scope.myGoBack =function(){
			history.go(-1)
		}

		$scope.proData = [
			{img:'./images/pro_search@3x.png',title:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',place:'广州',class:'icon ion-social-yen',price:'75.00',num:'5922'},
			{img:'./images/pro_search@3x.png',title:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',place:'广州',class:'icon ion-social-yen',price:'75.00',num:'5922'},
			{img:'./images/pro_search@3x.png',title:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',place:'广州',class:'icon ion-social-yen',price:'75.00',num:'5922'},
			{img:'./images/pro_search@3x.png',title:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',place:'广州',class:'icon ion-social-yen',price:'75.00',num:'5922'},
			{img:'./images/pro_search@3x.png',title:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',place:'广州',class:'icon ion-social-yen',price:'75.00',num:'5922'},
			{img:'./images/pro_search@3x.png',title:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',place:'广州',class:'icon ion-social-yen',price:'75.00',num:'5922'},
			{img:'./images/pro_search@3x.png',title:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',place:'广州',class:'icon ion-social-yen',price:'75.00',num:'5922'},
			{img:'./images/pro_search@3x.png',title:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',place:'广州',class:'icon ion-social-yen',price:'75.00',num:'5922'}

		]

		$scope.toggle = false;

		$scope.toggleScr = function(){
			if($scope.toggle){
				$scope.toggle = false;
			}else{
				$scope.toggle = true;	
			}
		}

	}])