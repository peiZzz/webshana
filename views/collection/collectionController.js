angular.module('app')
	.controller('collectionController',['$scope','$ionicSlideBoxDelegate',function($scope,$ionicSlideBoxDelegate){
		$scope.data = [
			{img:'./images/pro_search@3x.png',text:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',price:'￥75'},
			{img:'./images/pro_search@3x.png',text:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',price:'￥75'},
			{img:'./images/pro_search@3x.png',text:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',price:'￥75'},
			{img:'./images/pro_search@3x.png',text:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',price:'￥75'},
			{img:'./images/pro_search@3x.png',text:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',price:'￥75'},
			{img:'./images/pro_search@3x.png',text:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',price:'￥75'},
			{img:'./images/pro_search@3x.png',text:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',price:'￥75'}
       ];
        $scope.aIndex=0;
        $scope.title=[
	        {txt:'宝贝'},
	        {txt:'内容'},
        ];
        $scope.title_click=function(index){
            $scope.aIndex = index;
            $ionicSlideBoxDelegate.slide($scope.aIndex);
       }

       $scope.slide = {
			showPager:false
		}
	}])