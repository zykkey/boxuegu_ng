angular.module('aside', [])
.directive('nglAside', [function () {
    return {
	  scope: {},
	  restrict: 'E',
	  replace:true,
	  templateUrl: '/src/components/common/aside/aside.html',
	  controller: ['$scope', function ($scope) {
		console.log('侧边栏');
	  }]
    }
}]);