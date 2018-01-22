(function () {
var app = angular.module('app');

//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
	 			{
			 		name: 'layout',
			 		files: [
			 			'./views/layout/layout.css'
			 		]
			 	},
			 	
		 		{
			 		name: 'home',
			 		files: [
			 			'./views/home/homeController.js',
			 			'./views/home/home.css'
			 		]
			 	},
			 	{
			 		name: 'search',
			 		files: [
			 			'./views/search/searchController.js',
			 			'./views/search/search.css'
			 		]
			 	},
			 	{
			 		name: 'pro_search',
			 		files: [
			 			'./views/pro_search/pro_searchController.js',
			 			'./views/pro_search/pro_search.css'
			 		]
			 	},
			 	{
			 		name: 'classify',
			 		files: [
			 			'./views/classify/classifyController.js',
			 			'./views/classify/classify.css'
			 		]
			 	},
			 	{
			 		name: 'proList',
			 		files: [
			 			'./views/proList/proListController.js',
			 			'./views/proList/proList.css'
			 		]
			 	},
			 	{
			 		name: 'proDetail',
			 		files: [
			 			'./views/proDetail/proDetailController.js',
			 			'./views/proDetail/proDetail.css'
			 		]
			 	},
			 	{
			 		name: 'confirm',
			 		files: [
			 			'./views/confirm/confirmController.js',
			 			'./views/confirm/confirm.css'
			 		]
			 	},

			 	{
			 		name: 'modal',
			 		files: [
			 			'./modal/modal.css'
			 		]
			 	},

			 	{
			 		name: 'message',
			 		files: [
			 			'./views/message/messageController.js',
			 			'./views/message/message.css'
			 		]
			 	},

			 	{
			 		name: 'checklogistics',
			 		files: [
			 			'./views/checklogistics/checklogisticsController.js',
			 			'./views/checklogistics/checklogistics.css'
			 		]
			 	},

			 	{
			 		name: 'logisticsList',
			 		files: [
			 			'./views/logisticsList/logisticsListController.js',
			 			'./views/logisticsList/logisticsList.css'
			 		]
			 	},
			 	{
			 		name: 'shopping',
			 		files: [
			 			'./views/shopping/shoppingController.js',
			 			'./views/shopping/shopping.css'
			 		]
			 	},
			 	{
			 		name: 'dealsuccess',
			 		files: [
			 			'./views/dealsuccess/dealsuccessController.js',
			 			'./views/dealsuccess/dealsuccess.css'
			 		]
			 	},
			 	{
			 		name: 'personal',
			 		files: [
			 			'./views/personal/personalController.js',
			 			'./views/personal/personal.css'
			 		]
			 	},
			 	{
			 		name:'personData',
			 		files: [
			 			'./views/personData/personDataController.js',
			 			'./views/personData/personData.css'
			 		]
			 	},
			 	{
			 		name:'collection',
			 		files: [
			 			'./views/collection/collectionController.js',
			 			'./views/collection/collection.css'
			 		]
			 	},
			 	{
			 		name:'coupon',
			 		files: [
			 			'./views/coupon/couponController.js',
			 			'./views/coupon/coupon.css'
			 		]
			 	},
			 	{
			 		name:'mygoods',
			 		files: [
			 			'./views/mygoods/mygoodsController.js',
			 			'./views/mygoods/mygoods.css'
			 		]
			 	},
			 	{
			 		name:'refund',
			 		files: [
			 			'./views/refund/refundController.js',
			 			'./views/refund/refund.css'
			 		]
			 	},
			 	{
			 		name:'footmark',
			 		files: [
			 			'./views/footmark/footmarkController.js',
			 			'./views/footmark/footmark.css'
			 		]
			 	},
			 	{
			 		name:'assess',
			 		files: [
			 			'./views/assess/assessController.js',
			 			'./views/assess/assess.css'
			 		]
			 	},
			 	
			 	{
			 		name:'yindao',
			 		files: [
			 			'./views/yindao/yindaoController.js',
			 			'./views/yindao/yindao.css'
			 		]
			 	},
			 	{
			 		name:'assessDone',
			 		files: [
			 			'./views/assessDone/assessDoneController.js',
			 			'./views/assessDone/assessDone.css'
			 		]
			 	},
			 	{
			 		name:'addAssess',
			 		files: [
			 			'./views/addAssess/addAssessController.js',
			 			'./views/addAssess/addAssess.css'
			 		]
			 	},

			 	{
			 		name:'login',
			 		files: [
			 			'./views/login/loginController.js',
			 			'./views/login/login.css'
			 		]
			 	},
			 	{
			 		name:'rigister',
			 		files: [
			 			'./views/rigister/rigisterController.js',
			 			'./views/rigister/rigister.css'
			 		]
			 	},
			 	{
			 		name: 'modifypwd',
			 		files: [
			 			'./views/modifypwd/modifypwdController.js',
			 			'./views/modifypwd/modifypwd.css'
			 		]
			 	},
	 		]
 		});
	}]);
	
})();