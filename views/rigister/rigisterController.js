angular.module('app')
	.controller('rigisterController',['$scope','$state','validForm','tip','api','formatTime','$interval',function($scope,$state,validForm,tip,api,formatTime,$interval){
		$scope.userInfo = {
			phone:'',
			pwd:'',
			rePwd:'',
			code:'',
			registerTime:'',
			agree:100
		};	

		$scope.code = '';

		$scope.isPass = false;
        //注册验证 
		$scope.register = function(){						
			if(!isValid()){return}//不通过就拦截掉

			$scope.userInfo.registerTime = formatTime.format(new Date(),'yyyy-MM-dd hh:mm:ss');	
			tip.loadTips.showLoading();
			api.fetchPost('http://127.0.0.1:9000/register',$scope.userInfo)
				.then(function(data){
					// console.log(data);
					tip.loadTips.hideLoading();
					if (data.data.statusCode == 201 || data.data.statusCode == 202) {
						tip.showTip(data.data.msg);
					}else {
						$state.go('login')
					};	
				})
				.catch(function(err){
					console.log('出错了');
					tip.loadTips.hideLoading();
				})
		}

		function isValid(){
			if(!validForm.isNotEmpty($scope.userInfo.phone)){
				tip.showTip({msg:'手机号码不能为空'});
				return false;
			} else if (!validForm.validLength($scope.userInfo.phone,11,11)){
				tip.showTip({msg:'手机号码长度不正确'});
				return false
			}else if (!validForm.validPhone($scope.userInfo.phone,11,11)){
				tip.showTip({msg:'手机号码格式不正确'});
				return false
			}else if (!validForm.isNotEmpty($scope.userInfo.pwd)){
				tip.showTip({msg:'密码不能为空'});
				return false
			}else if (!validForm.validLength($scope.userInfo.pwd,6,16)){
				tip.showTip({msg:'密码长度不正确'});
				return false
			}else if (!validForm.isEqual($scope.userInfo.pwd,$scope.userInfo.rePwd)){
				tip.showTip({msg:'两次密码不一致'});
				return false
			}else if (!validForm.isNotEmpty($scope.userInfo.code)){
				tip.showTip({msg:'验证码不能为空'});
				return false
			}else if (!validForm.isEqual($scope.userInfo.code,$scope.code)){
				tip.showTip({msg:'验证码不正确'});
				return false
			}

			return true;
		}
        // 发送短信
        $scope.description = "获取验证码";
		var second = 59;
		var timerHandler;
		$scope.getValidCode = function () {
			if(timerHandler){return}
			timerHandler = $interval(function(){
				// $scope.show = true;
				if(second <= 0){
					$interval.cancel(timerHandler);
					second = 59;
					$scope.description = "获取验证码";
					// $scope.show = false;
				}else{
					$scope.description = second + "秒后重发";
					second--;
				}
			},1000,100)
			tip.loadTips.showLoading();
			api.fetchGet('http://127.0.0.1:9000/message', {phone: $scope.userInfo.phone})
				.then(function (data) {
					$scope.code = data.data.code;

					tip.showTip(data.data.msg);
					
					tip.loadTips.hideLoading();
				})
				.catch(function(err){
					console.log('rigster出错');
					tip.loadTips.hideLoading();
				})
				
		}

		$scope.isPhone = function(){
			$scope.isPass = validForm.validPhone($scope.userInfo.phone);
		}
		
	}])