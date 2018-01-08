angular.module('app')
	.controller('proDetailController',['$scope',function($scope){
		$scope.data = [
			{img:'./images/icons/yes_icon.png',name:'过敏无忧'},
			{img:'./images/icons/yes_icon.png',name:'极速退货'},
			{img:'./images/icons/yes_icon.png',name:'正品保证'},
			{img:'./images/icons/yes_icon.png',name:'急速退款'}
		]

		$scope.assData = [
			{name:'清洁强度',num:'567'},
			{name:'保温滋润',num:'314'},
			{name:'温和不刺激',num:'650'},
			{name:'划算',num:'215'},
			{name:'是正品',num:'155'}
		]

		$scope.proData = [
			{name:'品牌',content:'SANA/莎娜'},
			{name:'产地',content:'日本'},
			{name:'适合肤质',content:'混合型肤质'},
			{name:'起泡程度',content:'泡沫'},
			{name:'产地',content:'深层清洁、清洁毛孔、卸妆、清爽不紧绷'}
		]
	}])