angular.module('app')
	.controller('rigisterController',['$scope','validForm','tip','api',function($scope,validForm,tip,api){
		$scope.userInfo = {
			phone:'',
			pwd:'',
			rePwd:'',
			code:'1234'
		};	

		$scope.register = function(){
			if(!isValid()){return}//不通过就拦截掉
			
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
			}

			return true;
		}

		$scope.getValidCode = function () {
			api.fetchGet('http://127.0.0.1:9000/message', {phone: $scope.userInfo.phone})
				.then(function (data) {
					console.log(data);
				})
				.catch(function (err) {
					console.log(err);
				})
		}
		
	}])