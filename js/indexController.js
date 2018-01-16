angular.module('app')
	.controller('indexController',['$rootScope',function($rootScope){
		$rootScope.userInfo = {
			phone:'',
			isLogin:false,
			nickname:''
		};
		$scope.goPage = function (name) {
			$state.go(name);
		}
		$scope.back = function () {
			history.go(-1);
		}
	}])