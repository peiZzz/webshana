angular.module('app')
	.factory('tip', ['$ionicPopup', '$ionicLoading',function ($ionicPopup,$ionicLoading) {

		return {
			showTip: function (o) {
				$ionicPopup.show({
					title:'<div class="text-center">' + o.msg + '</div>',
					buttons: [
						{
							text: '<span>确认</span>',
							type: 'button-balanced' 
						}
					]
				});
			},

			loadTips: {
				showLoading:function(){
					$ionicLoading.show({
						template:'<ion-spinner icon="spiral" class="spinner-balanced"></ion-spinner>'
					});
				},
				hideLoading:function(){
					$ionicLoading.hide();
				}
				
			}

			
		};

	}])