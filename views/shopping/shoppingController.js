angular.module('app')
	.controller('shoppingController',['$scope',function($scope){
	
	$scope.data = {
    showDelete: false
  };
  
  // $scope.edit = function(item) {
  //   alert('Edit Item: ' + item.id);
  // };
  // $scope.share = function(item) {
  //   alert('Share Item: ' + item.id);
  // };
  
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };
  
  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };
  $scope.all_on_off=false;
  $scope.items = [
    { 
      img:'./images/product_bar_img_1@3x.png',
      title:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',
      subtitle:'化妆品净含量:150g/ml',
      price:58.00 ,
      sum:1,
      onOff:false
    },
    { 
      img:'./images/product_bar_img_2@3x.png',
      title:'日本sana浓润豆乳美肌面膜精华面膜贴补水保湿滋润透白',
      subtitle:'化妆品净含量:4片',
      price:85.00 ,
      sum:1,
      onOff:false
    },
    { 
      img:'./images/product_bar_img_3@3x.png',
      title:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',
      subtitle:'化妆品净含量:120g/ml',
      price:52.00 ,
      sum:1,
      onOff:false
    },
    { 
      img:'./images/product_bar_img_1@3x.png',
      title:'日本sana豆乳洗面奶女深层清洁补水保湿控油泡沫洁面',
      subtitle:'化妆品净含量:150g/ml',
      price:78.00,
      sum:1,
      onOff:false 
    }
  ];
  $scope.total=0;
  $scope.puls=function(aa,index){
      let arr=[];
      if(aa){
        for(let i=0;i<$scope.items.length;i++){
          if($scope.items[i].onOff){
          arr.push($scope.items[index].onOff);         
        }
      }
      $scope.total=$scope.total + ($scope.items[index].price * $scope.items[index].sum)
      }else{
        $scope.total=$scope.total - ($scope.items[index].price * $scope.items[index].sum)
      }      
      
     if(arr.length == $scope.items.length ){
          $scope.all_on_off=true;
     }else{
          $scope.all_on_off=false;
     }
  }
  $scope.all_onOff=function(){
    $scope.total=0;
      if($scope.all_on_off){
        for(let i=0;i<$scope.items.length;i++){
        $scope.items[i].onOff=true;
        $scope.total=$scope.total + ($scope.items[i].price * $scope.items[i].sum)
        }
      }else{
        $scope.total=0;
        for(let i=0;i<$scope.items.length;i++){
        $scope.items[i].onOff=false;
        }
      }
  };
  $scope.less_sum=function(index){
     if($scope.items[index].sum>0){
        $scope.items[index].sum--;
     }

  }
  $scope.plus_sum=function(index){
        $scope.items[index].sum++;
        if($scope.items[index].onOff){
          console.log(($scope.items[index].price * $scope.items[index].sum));
         $scope.total=$scope.total + $scope.items[index].price ;
     }else{
      console.log(2);
     }
  }

	}])