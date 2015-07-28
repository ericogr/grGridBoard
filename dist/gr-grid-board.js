angular.module('grGridBoard', [])
	.directive('grGridBoard', function() {
		'use strict';
	    return {
			restrict: 'E',
			transclude: true,
			scope: {
				values: '=?',
				countSelected: '=?',
				rows: '@',
				columns: '@',
				width: '@',
				height: '@',
				lineColour: '@',
				selectedColour: "@",
				unselectedColour: "@"
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
					if (!validateValues($scope.values, parseInt($scope.rows))) {
						console.debug('Invalid value [' + $scope.values + "]: creating a new array[[]]");
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
					$scope.lineColour = $scope.lineColour || 'black';
					$scope.selectedColour = $scope.selectedColour || $scope.lineColour;
					$scope.unselectedColour = $scope.unselectedColour || 'white';
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
			},
			templateUrl: 'gr-grid-board-template',
			replace: true
	    };
	});