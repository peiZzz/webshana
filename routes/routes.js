angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/login');
		$stateProvider
			.state('layout', {
				url: '',
				abstruct: true,
				templateUrl: './views/layout/layout.html',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('layout');
					}]
				}
			})
			//修改密码
			.state('modifypwd', {
				url: '/modifypwd',
				templateUrl: './views/modifypwd/modifypwd.html',
				controller: 'modifypwdController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('modifypwd');
					}]
				}
			})
			.state('layout.home', {
				url: '/layout/home',
				templateUrl: './views/home/home.html',
				controller: 'homeController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('home');
					}]
				}
			})
			//搜索页
			.state('search', {
				url: '/search',
				templateUrl: './views/search/search.html',
				controller: 'searchController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('search');
					}]
				}
			})
			//搜索详情
			.state('pro_search', {
				url: '/pro_search',
				templateUrl: './views/pro_search/pro_search.html',
				controller: 'pro_searchController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('pro_search');
					}]
				}
			})
			//分类
			.state('layout.classify', {
				url: '/layout/classify',
				templateUrl: './views/classify/classify.html',
				controller: 'classifyController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('classify');
					}]
				}
			})
			//产品列表
			.state('layout.proList', {
				url: '/layout/proList',
				templateUrl: './views/proList/proList.html',
				controller: 'proListController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('proList');
					}]
				}
			})

			//产品详情
			.state('proDetail', {
				url: '/proDetail',
				templateUrl: './views/proDetail/proDetail.html',
				controller: 'proDetailController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('proDetail');
					}]
				}
			})

			//确认订单
			.state('confirm', {
				url: '/confirm',
				templateUrl: './views/confirm/confirm.html',
				controller: 'confirmController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('confirm');
					}]
				}
			})

			//支付成功
			.state('layout.dealsuccess', {
				url: '/layout/dealsuccess',
				templateUrl: './views/dealsuccess/dealsuccess.html',
				controller: 'dealsuccessController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('dealsuccess');
					}]
				}
			})

			//消息
			.state('layout.message', {
				url: '/layout/message',
				templateUrl: './views/message/message.html',
				controller: 'messageController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('message');
					}]
				}
			})

			//查看物流
			.state('checklogistics', {
				url: '/checklogistics',
				templateUrl: './views/checklogistics/checklogistics.html',
				controller: 'checklogisticsController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('checklogistics');
					}]
				}
			})

			//物流详情

			.state('layout.logisticsList', {
				url: '/layout/logisticsList',
				templateUrl: './views/logisticsList/logisticsList.html',
				controller: 'logisticsListController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('logisticsList');
					}]
				}
			})
			//购物车
			.state('layout.shopping', {
				url: '/layout/shopping',
				templateUrl: './views/shopping/shopping.html',
				controller: 'shoppingController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('shopping');
					}]
				}
			})

			//个人中心
			.state('layout.personal', {
				url: '/layout/personal',
				templateUrl: './views/personal/personal.html',
				controller: 'personalController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('personal');
					}]
				}
			})
			//个人资料
			.state('personData', {
				url: '/personData',
				templateUrl: './views/personData/personData.html',
				controller: 'personDataController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('personData');
					}]
				}
			})
			//我的收藏
			.state('layout.collection', {
				url: '/layout/collection',
				templateUrl: './views/collection/collection.html',
				controller: 'collectionController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('collection');
					}]
				}
			})
			//优惠券
			.state('layout.coupon', {
				url: '/layout/coupon',
				templateUrl: './views/coupon/coupon.html',
				controller: 'couponController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('coupon');
					}]
				}
			})
			//我的订单
			.state('layout.mygoods', {
				url: '/layout/mygoods',
				templateUrl: './views/mygoods/mygoods.html',
				controller: 'mygoodsController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('mygoods');
					}]
				}
			})
			//退款/售后
			.state('layout.refund', {
				url: '/layout/refund',
				templateUrl: './views/refund/refund.html',
				controller: 'refundController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('refund');
					}]
				}
			})
			//我的足迹
			.state('layout.footmark', {
				url: '/layout/footmark',
				templateUrl: './views/footmark/footmark.html',
				controller: 'footmarkController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('footmark');
					}]
				}
			})
			//发表评价
			.state('layout.assess', {
				url: '/layout/assess',
				templateUrl: './views/assess/assess.html',
				controller: 'assessController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('assess');
					}]
				}
			})
			

			//引导页
			.state('yindao', {
				url: '/yindao',
				templateUrl: './views/yindao/yindao.html',
				controller: 'yindaoController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('yindao');
					}]
				}
			})

			//评价成功
			.state('layout.assessDone', {
				url: '/layout/assessDone',
				templateUrl: './views/assessDone/assessDone.html',
				controller: 'assessDoneController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('assessDone');
					}]
				}
			})

			//追加评价
			.state('layout.addAssess', {
				url: '/layout/addAssess',
				templateUrl: './views/addAssess/addAssess.html',
				controller: 'addAssessController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('addAssess');
					}]
				}
			})
			//登录
			.state('login', {
				url: '/login',
				templateUrl: './views/login/login.html',
				controller: 'loginController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('login');
					}]
				}
			})

			//注册
			.state('rigister', {
				url: '/rigister',
				templateUrl: './views/rigister/rigister.html',
				controller: 'rigisterController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('rigister');
					}]
				}
			})
	}])