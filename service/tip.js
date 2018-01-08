angular.module('app')
	.factory('Tip', ['$ionicPopup', function ($ionicPopup) {

		return {
			showTip: function (o, scope) {
				$ionicPopup.show({
					template:  o.tipContent,
					title: o.title,
					scope: scope,
					buttons: [
						{
							text: '取消',
							type: 'button-assertive' 
						},
						{
							text: '确认',
							type: 'button-positive',
							onTap: function () {
								return typeof o.fn === 'function' && o.fn();
							}
						}
					]
				}).then(function (res) {
					console.log('res ==> ', res);
				})
			}
		}

	}])