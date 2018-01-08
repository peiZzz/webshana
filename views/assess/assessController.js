angular.module('app')
	.controller('assessController',['$scope',function($scope){
		$scope.data = [
			{text:'深处清洁'},
			{text:'描述相符'},
			{text:'描述相符'},
		]
		$scope.lastData = [
			{text:'物流服务'},
			{text:'服务态度'},
			
		]
	}])