angular.module('app')
	.controller('searchController',['$scope','$state',function($scope,$state){
		$scope.data = [
			{name:'豆乳'},
			{name:'美白'},
			{name:'补水控油'},
			{name:'精华液'},
			{name:'面膜'},
			{name:'睫毛膏'},
			{name:'豆乳'},
			{name:'面膜'},
			{name:'补水控油'},
			{name:'精华液'},
		]

		$scope.myGoBack = function(){
			history.go(-1);
		}
		$scope.goValue = function(){
			$state.go('pro_search')
		}
	}])