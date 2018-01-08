angular.module('app')
	.controller('couponController',['$scope',function($scope){
		$scope.data = [
			{term:'满100元使用',price:'50',range:'全场使用',time:'2017-9-5',num:'007',style:'background:#ff898c'},
			{term:'满100元使用',price:'50',range:'全场使用',time:'2017-9-5',num:'007',style:'background:#9789ff'},
			{term:'满100元使用',price:'50',range:'全场使用',time:'2017-9-5',num:'007',style:'background:#89c1ff'},
			{term:'满100元使用',price:'50',range:'全场使用',time:'2017-9-5',num:'007',style:'background:#ff9f89'},
			{term:'满100元使用',price:'50',range:'全场使用',time:'2017-9-5',num:'007',style:'background:#eab74a'}
		]
	}])