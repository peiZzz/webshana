angular.module('app')
	.controller('mygoodsController',['$scope',function($scope){
		$scope.aIndex = 0;
		$scope.title = [
			{txt:'全部'},
			{txt:'待付款'},
			{txt:'待发货'},
			{txt:'待收货'},
			{txt:'待评价'}
		];
		$scope.title_click=function(index){
                   $scope.aIndex = index;
                   console.log($scope.aIndex);
              }
              $scope.state=['交易关闭'];
              $scope.state1=['等待买家付款'];

              $scope.data = [
              		{
              			shop:'SANA莎娜',
                                   state:'等待买家付款',
                                   state1:'等待买家付款',
                                   state2:'买家已付款',
                                   state3:'卖家已发货',
                                   state4:'交易成功',
              			img:'./images/product_bar_img_1@3x.png',
              			text:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',
              			para:'化妆品净含量:150g/ml',
              			price:'75.00',
              			num:'x1',
              			total_num:'7',
              			total_price:'75.00',
              			total_fare:'￥10.00',
                                   span1:'<span class="payfor">朋友代付</span>',
                                   span2:' <span class="cancel">取消订单</span>',
                                   span3:'<span class="cancel">付款</span>'
              		},
              		{
              			state:'交易关闭',
                                   state1:'等待买家付款',
                                   state2:'买家已付款',
                                   state3:'卖家已发货',
                                   state4:'交易成功',
              			img:'./images/product_bar_img_2@3x.png',
              			text:'日本sana浓润豆乳美肌面膜精华面膜贴补水保湿滋润透白',
              			para:'化妆品净含量:4片',
              			price:'85.00',
              			num:'x2',
              			total_num:'2',
              			total_price:'85.00',
              			total_fare:'￥0.00',
              			span3:'<span class="cancel">付款</span>'
              		},
              		{
              			
              			state:'交易关闭',
                                   state1:'等待买家付款',
                                   state2:'买家已付款',
                                   state3:'卖家已发货',
                                   state4:'交易成功',
              			img:'./images/product_bar_img_3@3x.png',
              			text:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',
              			para:'化妆品净含量:120g/ml',
              			price:'56.00',
              			num:'x1',
              			total_num:'1',
              			total_price:'56.00',
              			total_fare:'￥10.00',
              			span3:'<span class="cancel">付款</span>'
              		},
              		{
              			
              			state:'交易关闭',
                                   state1:'等待买家付款',
                                   state2:'买家已付款',
                                   state3:'卖家已发货',
                                   state4:'交易成功',
              			img:'./images/product_bar_img_1@3x.png',
              			text:'日本sana浓润豆乳美肌面膜精华面膜贴补水保湿滋润透白',
              			para:'化妆品净含量:150g/ml',
              			price:'86.00',
              			num:'x2',
              			total_num:'2',
              			total_price:'86.00',
              			total_fare:'￥0.00',
              			span3:'<span class="cancel">付款</span>'
              		},
              ]

              $scope.delete = function(index){
                     
                     $scope.data.splice($scope.data.indexOf(index),1);
                     console.log(index);
              }

              $scope.slide = {
                     showPager:false
              }
	}])