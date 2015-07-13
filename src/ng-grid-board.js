angular.module('ngGridBoard', [])
	.directive('gridBoard', function() {
	    return {
	      restrict: 'E',
	      transclude: true,
	      scope: {},
	      controller: function($scope, $element) {
	      },
	      template:
	        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">' +
	        '<line x1="0" y1="1" x2="16" y2="1" style="stroke:#006600;"/>' +
	        '<line x1="0" y1="3" x2="16" y2="3" style="stroke:#006600;"/>' +
	        '<line x1="0" y1="5" x2="16" y2="5" style="stroke:#006600;"/>' +
	        '<line x1="0" y1="7" x2="16" y2="7" style="stroke:#006600;"/>' +
	        '<line x1="0" y1="9" x2="16" y2="9" style="stroke:#006600;"/>' +
	        '<line x1="0" y1="11" x2="16" y2="11" style="stroke:#006600;"/>' +
	        '<line x1="0" y1="13" x2="16" y2="13" style="stroke:#006600;"/>' +
	        '<line x1="0" y1="15" x2="16" y2="15" style="stroke:#006600;"/>' +

	        '<line x1="1" y1="0" x2="1" y2="16" style="stroke:#006600;"/>' +
	        '<line x1="3" y1="0" x2="3" y2="16" style="stroke:#006600;"/>' +
	        '<line x1="5" y1="0" x2="5" y2="16" style="stroke:#006600;"/>' +
	        '<line x1="7" y1="0" x2="7" y2="16" style="stroke:#006600;"/>' +
	        '<line x1="9" y1="0" x2="9" y2="16" style="stroke:#006600;"/>' +
	        '<line x1="11" y1="0" x2="11" y2="16" style="stroke:#006600;"/>' +
	        '<line x1="13" y1="0" x2="13" y2="16" style="stroke:#006600;"/>' +
	        '<line x1="15" y1="0" x2="15" y2="16" style="stroke:#006600;"/>' +

	        '</svg>',
	      replace: true
	    };
	  });