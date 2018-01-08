angular.module('app')
	.controller('footmarkController',['$scope',function($scope){
		$scope.data = [
			{week:'日',date:'3'},
			{week:'一',date:'4'},
			{week:'二',date:'5'},
			{week:'三',date:'6'},
			{week:'四',date:'7'},
			{week:'五',date:'8'},
			{week:'六',date:'9'}
		]

		$scope.dateDetail = [
			{img:'./images/proDetail_banner.png'},
			{img:'./images/proDetail_banner.png'},
			{img:'./images/proDetail_banner.png'},
			{img:'./images/proDetail_banner.png'},
			{img:'./images/proDetail_banner.png'},
			{img:'./images/proDetail_banner.png'},
			{img:'./images/proDetail_banner.png'},
			{img:'./images/proDetail_banner.png'},
			{img:'./images/proDetail_banner.png'},
			{img:'./images/proDetail_banner.png'},
			{img:'./images/proDetail_banner.png'},
			{img:'./images/proDetail_banner.png'},
			{img:'./images/proDetail_banner.png'},
			{img:'./images/proDetail_banner.png'},
			{img:'./images/proDetail_banner.png'}
		]
	}])