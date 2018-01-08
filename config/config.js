angular.module('app')
	.config(['$ionicConfigProvider', function ($ionicConfigProvider) {
		 $ionicConfigProvider.platform.android.tabs.position('bottom');
	}])