angular.module('app')
	.controller('proListController',['$scope','$location',function($scope,$location){
		$scope.data = [
			{name:'美白'},
			{name:'保湿'},
			{name:'面霜'},
			{name:'面膜'},
			{name:'化妆水'},
			{name:'洗面奶'},
			{name:'精华液'},
		]

		$scope.proData = [
			{img: './images/product_bar_img_1@3x.png',name: '日本莎娜天然蚕丝洗面奶 深层清洁补水保湿面乳白皙 去角质',class: 'icon ion-social-yen',classR: 'icon ion-ios-cart',newPirce:'89.00',url:'proDetail'},
			{img: './images/product_bar_img_1@3x.png',name: 'SANA豆乳净颜洗面奶女补水保湿深层清洁面乳150ML提亮肤色',class: 'icon ion-social-yen',classR: 'icon ion-ios-cart',newPirce:'109.00',url:'proDetail.html'},
			{img: './images/product_bar_img_2@3x.png',name: 'SANA豆乳美肌浓润保湿洗面奶女高补水温和卸妆泡沫滋润洁面乳',class: 'icon ion-social-yen',classR: 'icon ion-ios-cart',newPirce:'90.00',url:'proDetail.html'},
			{img: './images/product_bar_img_2@3x.png',name: 'SANA豆乳净颜洗面奶女补水保湿深层清洁面乳150ML提亮肤色',class: 'icon ion-social-yen',classR: 'icon ion-ios-cart',newPirce:'90.00',url:'proDetail.html'},
			{img: './images/product_bar_img_3@3x.png',name: '日本莎娜天然蚕丝洗面奶 深层清洁补水保湿面乳白皙 去角质',class: 'icon ion-social-yen',classR: 'icon ion-ios-cart',newPirce:'90.00',url:'proDetail.html'},
			{img: './images/product_bar_img_2@3x.png',name: 'SANA豆乳净颜洗面奶女补水保湿层清洁面乳150ML提亮肤色',class: 'icon ion-social-yen',classR: 'icon ion-ios-cart',newPirce:'90.00',url:'proDetail.html'}
		]

		$scope.myGoBack = function(){
			history.go(-1);
		}
		$scope.goDeep = function(){
			$location.path('proDetail');
		}
	}])
