angular.module('app')
	.controller('messageController',['$scope','$state',function($scope,$state){
		$scope.data = [
			{img:'./images/icons/Evaluate_success_bar_icon_1@3x(20).png',name:'交易物流',url:'checklogistics'},
			{img:'./images/icons/Evaluate_success_bar_icon_1@3x(22).png',name:'通知',url:''},
			{img:'./images/icons/Evaluate_success_bar_icon_1@3x(26).png',name:'互动',url:''}
		]
		$scope.talkData = [
			{img:'./images/news_bar_img_1@3x.png',name:'Sana莎娜旗舰店',content:'Hello~亲'},
			{img:'./images/news_bar_img_1@3x.png',name:'西瓜客服一',content:'Hello~亲'},
			{img:'./images/news_bar_img_1@3x.png',name:'牛奶客服一',content:'Hello~亲'},
			{img:'./images/news_bar_img_1@3x.png',name:'碧莲旗舰店',content:'Hello~亲'},
			{img:'./images/news_bar_img_1@3x.png',name:'荔枝客服一',content:'Hello~亲'},
			{img:'./images/news_bar_img_1@3x.png',name:'豆腐客服一',content:'Hello~亲'}
		]
		$scope.check = function(index){
			$state.go(index);
		}

	}])