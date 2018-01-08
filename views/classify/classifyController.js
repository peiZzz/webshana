angular.module('app')
	.controller('classifyController',['$scope','$state',function($scope,$state){
		$scope.data = [
			{name:'美肌经典系列',isActive:'true'},
			{name:'美白保湿系列',isActive:'false',url:'layout.proList'},
			{name:'肌饮胶原系列',isActive:'false'},
			{name:'抗初老系列',isActive:'false'},
			{name:'ESTENY系列',isActive:'false'},
			{name:'紧致润泽系列',isActive:'false'},
			{name:'毛孔系列',isActive:'false'}
		]
		
		$scope.proData = [
			{img:'./images/home_New_arrival_img_1@3x.png',title:'日本sana浓缩豆乳面膜4片装'},
			{img:'./images/home_New_arrival_img_1@3x.png',title:'日本sana浓缩豆乳面膜4片装'},
			{img:'./images/home_New_arrival_img_1@3x.png',title:'日本sana浓缩豆乳面膜4片装'},
			{img:'./images/home_New_arrival_img_1@3x.png',title:'日本sana浓缩豆乳面膜4片装'},
			{img:'./images/home_New_arrival_img_1@3x.png',title:'日本sana浓缩豆乳面膜4片装'},
			{img:'./images/home_New_arrival_img_1@3x.png',title:'日本sana浓缩豆乳面膜4片装'}
		]

	}])