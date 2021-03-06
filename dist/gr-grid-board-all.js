angular.module('grGridBoard', [])
	.directive('grGridBoard', function() {
		'use strict';
	    return {
			restrict: 'E',
			transclude: true,
			templateUrl: 'gr-grid-board-template',
			replace: true,
			scope: {
				values: '=?',
				onClick: '&',
				countSelected: '=?',
				rows: '@',
				columns: '@',
				width: '@',
				height: '@'
			},
			link: function($scope, $element) {
				initialize();

				$scope.$watch('rows', function(rows) {
		    		initialize();
		    	});

		    	$scope.$watch('columns', function(columns) {
		    		initialize();
		    	});

				function initialize() {
					//Invalid value: creating a new array
					if (!validateValues($scope.values, parseInt($scope.rows))) {
						$scope.values = createValues(parseInt($scope.rows), parseInt($scope.columns));
					}

					updatePositions();
					updateCount();
				}

		    	function validateValues(values, rows) {
		    		return (values instanceof Array && values.length >= rows);
		    	}

		    	function createValues(rows, columns) {
					return Array.apply(null, new Array(parseInt($scope.rows))).map(function() {
						return Array.apply(null, new Array(parseInt($scope.columns))).map(Boolean.prototype.valueOf, false);
					});
		    	}
		    	
		    	function updatePositions() {
			    	$scope.viewBox = "0 0 " + $scope.width + " " + $scope.height;
					$scope.rectWidth = $scope.width / $scope.columns;
					$scope.rectHeight = $scope.height / $scope.rows;
					$scope.positions = generatePositions($scope.rows, $scope.columns, $scope.rectWidth, $scope.rectHeight);
		    	}

		    	function updateCount() {
		    		var count = 0;

		    		for (var row = 0; row < parseInt($scope.rows); row++) {
		    			for (var col = 0; col < parseInt($scope.columns); col++) {
		    				count += $scope.values[row][col] ? 1 : 0;
		    			}
		    		}

		    		$scope.countSelected = count;
		    	}

				$scope.clickRect = function(line, column) {
					$scope.values[line][column] = !$scope.values[line][column];
					
					updateCount();

					$scope.onClick({'line': line, 'column': column, 'value': $scope.values[line][column], 'countSelected': $scope.countSelected, 'values': $scope.values});
				};

				function generatePositions(rows, columns, width, height) {
					var ret = [];

					for (var row = 0; row < rows; row++) {
						for (var col = 0; col < columns; col++) {
							ret.push({"line": row, "column": col, "x": col * width, "y": row * height});
						}
					}

					return ret;
				}
			}
	    };
	});;angular.module('grGridBoard').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('gr-grid-board-template',
    "<svg xmlns=\"http://www.w3.org/2000/svg\" ng-attr-viewBox=\"{{viewBox}}\">\n" +
    "\t<rect \n" +
    "\t\tng-repeat=\"pos in positions\"\n" +
    "\t\twidth=\"{{rectWidth}}\"\n" +
    "\t\theight=\"{{rectHeight}}\"\n" +
    "\t\tclass=\"gr-grid-rect gr-grid-rect-{{pos.line}}x{{pos.column}}\"\n" +
    "\t\tng-class=\"{selected: values[pos.line][pos.column], unselected: !values[pos.line][pos.column]}\"\n" +
    "\t\tng-click=\"clickRect(pos.line, pos.column)\"\n" +
    "\t\tng-attr-x=\"{{pos.x}}\" ng-attr-y=\"{{pos.y}}\">\n" +
    "\t</rect>\n" +
    "</svg>"
  );

}]);
