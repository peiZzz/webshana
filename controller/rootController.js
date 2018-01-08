angular.module('app')
	.controller('rootController', ['$state', '$scope', function ($state, $scope) {
		$scope.goPage = function (name) {
			$state.go(name);
		}
		$scope.back = function () {
			history.go(-1);
		}
	}])