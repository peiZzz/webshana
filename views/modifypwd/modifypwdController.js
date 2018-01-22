angular.module('app')
	.controller('modifypwdController',['$scope','tip','validForm','api',function($scope,tip,validForm,api){
		$scope.userControl = {
			isControl:true,
			isEmail:true,
			isGetCode:false
		};

		$scope.userInfo = {
			email:'',
			pwd:'',
			repwd:'',
			code:'',
			validCode:''
		};
		$scope.phone = function(){
			for(let key in $scope.userControl){
				$scope.userControl[key] = false;
			}
		}
		$scope.email = function(){
			$scope.userControl.isControl = false;
			$scope.userControl.isEmail = true;
			$scope.userControl.isGetCode = false;
		};
		$scope.cancel = function(){
			$scope.userControl.isControl = true;
		};
		$scope.getCode = function(){
			if(!isValidEmail()){return};
			$scope.userControl.isGetCode = true;
			tip.loadTips.showLoading();
			api.fetchGet('http://127.0.0.1:9000/emailcode',{email:$scope.userInfo.email})
				.then(function(data){
					tip.loadTips.hideLoading();
					$scope.userInfo.validCode = data.data.validCode; 
					tip.showTip(data.data.msg);
					
					console.log(data);
				})
				.catch(function(err){
					tip.loadTips.hideLoading();
					console.log(err)
				})
		};

		$scope.commit = function(){
			if(!isValid()){return};
			tip.loadTips.showLoading();
			api.fetchPost('http://127.0.0.1:9000/modifypwd',$scope.userInfo)
				.then(function(data){
					tip.loadTips.hideLoading();
					if(data.data.statusCode == 800){
						tip.showTip(data.data.msg);
					}
				})
				.catch(err =>{
					tip.loadTips.hideLoading();
					console.log(err);
				})
		};

		function isValidEmail(){
			if(!validForm.isNotEmpty($scope.userInfo.email)){
				tip.showTip('邮箱不能为空');
				return false;
			}else if (!validForm.validEmail($scope.userInfo.email)){
				tip.showTip('邮箱格式不正确');
				return false;
			}
			return true;
		}

		function isValid(){
			if(!isValidEmail()){return};

			if(!validForm.isNotEmpty($scope.userInfo.code)){
				tip.showTip('验证码不能为空');
				return false;
			}else if(!validForm.isEqual($scope.userInfo.code,$scope.userInfo.validCode)){
				tip.showTip('验证码不正确');
				return false;
			}else if(!validForm.isNotEmpty($scope.userInfo.pwd)){
				tip.showTip('新密码不能为空');
				return false;
			}else if (!validForm.validLength($scope.userInfo.pwd,6,16)){
				tip.showTip('新密码长度不正确');
				return false;
			}else if (!validForm.isEqual($scope.userInfo.pwd,$scope.userInfo.repwd)){
				tip.showTip('两次密码不一致');
				return false;
			}
			return true;
		}
	}])