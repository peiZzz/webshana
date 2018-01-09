angular.module('app')
	.factory('validForm',[function(){
		return {
			//验证手机号码
			validPhone:function(val,msg){
				var reg = /^1[35678]\d{9}$/;		
				return reg.test(val);		
			},

			//非空
			isNotEmpty:function(val){
				return val == '' ? false : true;
			},

			//长度验证
			validLength:function(val, min, max){
				return val.length <= max && val.length >= min ? true : false;
			},

			//两值相等验证
			isEqual:function(v1,v2){
				return v1 == v2 ? true : false;
			},
		};
	}])