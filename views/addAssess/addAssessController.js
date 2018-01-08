angular.module('app')
	.controller('addAssessController',['$scope',function($scope){
		$scope.visible = false;
		$scope.toggle = function(){
			$scope.visible = !$scope.visible
		}
	}])