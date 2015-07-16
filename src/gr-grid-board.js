angular.module('grGridBoard', [])
	.directive('grGridBoard', function() {
	    return {
			restrict: 'E',
			transclude: true,
			scope: {
				lines: '=',
				columns: '=',
				width: '@',
				height: '@',
				lineColour: '@'
			},
			controller: function($scope, $element) {
				$scope.viewBox = "0 0 " + $scope.width + " " + $scope.height;
				$scope.rectWidth = $scope.width / $scope.columns;
				$scope.rectHeight = $scope.height / $scope.lines;
				$scope.positions = generatePositions($scope.lines, $scope.columns, $scope.rectWidth, $scope.rectHeight);
				$scope.lineColour = $scope.lineColour || 'black';

				$scope.clickRect = function(posRef) {
					posRef.selected = !posRef.selected;
				};

				function generatePositions(lines, columns, width, height) {
					var ret = [];

					for (var l = 0; l < lines; l++) {
						for (var c = 0; c < columns; c++) {
							ret.push({"line": l, "column": c, "x": c * width, "y": l * height, "selected": false});
						}
					}

					return ret;
				}
			},
			templateUrl: 'svg-grid-board.html',
			replace: true
	    };
	});