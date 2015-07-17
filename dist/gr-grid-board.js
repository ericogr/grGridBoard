angular.module('grGridBoard', [])
	.directive('grGridBoard', function() {
		'use strict';
	    return {
			restrict: 'E',
			transclude: true,
			scope: {
				rows: '@',
				columns: '@',
				width: '@',
				height: '@',
				lineColour: '@',
				selectedColour: "@",
				unselectedColour: "@"
			},
			controller: ['$scope', '$element', function($scope, $element) {
				updatePositions();

				$scope.$watch('rows', function(rows) {
		    		$scope.rows = rows;
		    		updatePositions();
		    	});

		    	$scope.$watch('columns', function(columns) {
		    		$scope.columns = columns;
		    		updatePositions();
		    	});
		    	
		    	function updatePositions() {
			    	$scope.viewBox = "0 0 " + $scope.width + " " + $scope.height;
					$scope.rectWidth = $scope.width / $scope.columns;
					$scope.rectHeight = $scope.height / $scope.rows;
					$scope.lineColour = $scope.lineColour || 'black';
					$scope.selectedColour = $scope.selectedColour || $scope.lineColour;
					$scope.unselectedColour = $scope.unselectedColour || 'white';
					$scope.positions = generatePositions($scope.rows, $scope.columns, $scope.rectWidth, $scope.rectHeight);
		    	}

				$scope.clickRect = function(posRef) {
					posRef.selected = !posRef.selected;
				};

				function generatePositions(rows, columns, width, height) {
					var ret = [];

					for (var l = 0; l < rows; l++) {
						for (var c = 0; c < columns; c++) {
							ret.push({"line": l, "column": c, "x": c * width, "y": l * height, "selected": false});
						}
					}

					return ret;
				}
			}],
			templateUrl: 'gr-grid-board-template',
			replace: true,
			link: link
	    };

	    function link($scope, $elem, attrs) {
	    	console.info('y');
	    }
	});