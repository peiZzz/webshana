angular .module('app')
	.controller('dealsuccessController',['$scope','$state',function($scope,$state){
		
		$scope.myGoBack = function(){
			history.go(-1);
		}
		
	}])