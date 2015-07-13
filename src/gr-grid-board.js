angular.module('grGridBoard', [])
	.directive('grGridBoard', function() {
	    return {
	      restrict: 'E',
	      transclude: true,
	      scope: {},
	      controller: function($scope, $element) {
	      },
	      templateUrl: 'svg-grid-board.html',
	      replace: true
	    };
	  });