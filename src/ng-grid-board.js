angular.module('ngGridBoard', [])
	.directive('gridBoard', function() {
	    return {
	      restrict: 'E',
	      transclude: true,
	      scope: {},
	      controller: function($scope, $element) {
	      },
	      template:
	        '<div>teste</div>',
	      replace: true
	    };
	  });