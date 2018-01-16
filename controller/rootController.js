angular.module('app')
	.controller('rootController', ['$state', '$scope', function ($state, $scope) {
		//保存登录用户信息
		// $rootScope.userInfo = {
		// 	phone:'',
		// 	isLogin:false,
		// 	nickname:''
		// };
		$scope.goPage = function (name) {
			$state.go(name);
		}
		$scope.back = function () {
			history.go(-1);
		}
	}])