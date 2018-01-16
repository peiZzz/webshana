angular.module('app')
	.controller('loginController',['$scope','$state','api','tip','validForm',function($scope,$state,api,tip,validForm){
		$scope.userInfo = {
			phone:'',
			pwd:''
		};
		$scope.login = function(){
			if(!isvalid()){return};
			console.log($scope.userInfo);
			//开启加载动画
			tip.loadTips.showLoading();
			api.fetchPost('http://127.0.0.1:9000/login',$scope.userInfo)
				.then(function(data){
					//关闭加载动画
					tip.loadTips.hideLoading();
					console.log(data.data)
					if(data.data.statusCode == 1300){
						$state.go('layout.home');
						
						tip.showTip(data.data.msg);
					}else if(data.data.statusCode == 1301 || data.data.statusCode == 1302){
						tip.showTip(data.data.msg);						
					}else{
						tip.showTip(data.data.msg)						
					}
					
				})
				.catch(function(err){
					//关闭加载动画
					tip.loadTips.hideLoading();
					console.log(err);
				})
		}

		//验证表单是否合法

		function isvalid (){
			if(!validForm.isNotEmpty($scope.userInfo.phone)){
				tip.showTip({msg:'手机号不能为空'});
				return false;
			}else if(!validForm.validLength($scope.userInfo.phone,11,11)){
			tip.showTip({msg:'手机号长度不正确'});
				return false;
			}else if(!validForm.validPhone($scope.userInfo.phone)){
				tip.showTip({msg:'手机号码格式不正确'});
				return false;
			}else if (!validForm.isNotEmpty($scope.userInfo.pwd)) {
				tip.showTip({msg:'密码不能为空'});
				return false;
			}else if (!validForm.validLength($scope.userInfo.pwd,6,16)) {
				tip.showTip({msg:'密码长度不正确'});
				return false;
			}

			return true;
		}
	}])
