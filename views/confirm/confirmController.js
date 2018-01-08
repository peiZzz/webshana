angular.module('app')
	.controller('confirmController',['$rootScope', '$scope', '$state', '$ionicActionSheet','modal',function($rootScope,$scope,$state,$ionicActionSheet,modal){
		$scope.data = [
			{
				img:'./images/product_bar_img_1@3x.png',
				 name:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',
				 parameter:'化妆品净含量:150g/ml',
				 class:'icon ion-social-yen',
				 pirce:'75.00',
				 num:'x1'
			},
			{
				img:'./images/product_bar_img_2@3x.png',
				 name:'日本sana浓润豆乳美肌面膜精华面膜贴补水保湿滋润透白',
				 parameter:'化妆品净含量:4片',
				 class:'icon ion-social-yen',
				 pirce:'85',
				 num:'x2'
			},
			{
				img:'./images/product_bar_img_3@3x.png',
				 name:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',
				 parameter:'化妆品净含量:120g/ml',
				 class:'icon ion-social-yen',
				 pirce:'56.00',
				 num:'x1'
			},
			{
				img:'./images/product_bar_img_1@3x.png',
				 name:'日本sana浓润豆乳美肌面膜精华面膜贴补水保湿滋润透白',
				 parameter:'化妆品净含量:150g/ml',
				 class:'icon ion-social-yen',
				 pirce:'78.00',
				 num:'x3'
			}
		]


		$scope.shopData = [
			{name:'店铺优惠',state:'满一百包邮',icon:'icon ion-ios-arrow-right'},
			{name:'配送方式',state:'快递 包邮',icon:'icon ion-ios-arrow-right'},
			{name:'可用积分',state:'未选择',icon:'icon ion-ios-arrow-right'},
			{name:'优惠券',state:'未使用',icon:'icon ion-ios-arrow-right'},
			{name:'发票消息',state:'需要发票',icon:'icon ion-ios-arrow-right'},
		]


		modal.ionicModal($scope);

		// $scope.go=function(){
		// 	modal.closeModal($scope);
		// 	// $rootScope.isHome = true;
		// 	// $state.go('footertoggle.dealsuccess.guesslike');
		// 	// $state.go('footertoggle.dealfail.guesslike');

		// }		
        
		$scope.modal_on=function(){
			
           modal.openModal($scope);
		};
		$scope.modal_off=function(){
           modal.closeModal($scope);
		}
	}])