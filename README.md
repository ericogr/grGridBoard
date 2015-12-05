# AngularJS Grid Board [![Build Status](https://travis-ci.org/ericogr/grGridBoard.svg?branch=master)](http://travis-ci.org/ericogr/grGridBoard)

With this directive, you can create a dynamic grid board. When you click on any square, it makes visible or invisible.

## Usage
1. `bower install gr-grid-board`
2. Add `grGridBoard` as a module dependency to your app.
3. Insert the `gr-grid-board` directive into your template:

```html
    <gr-grid-board
      id="board1"
      values="boardValue"
      on-click="clicado(line, column, value, countSelected, values)"
      count-selected="count" 
      rows="{{boardRows}}"
      columns="{{boardCols}}"
      width="512"
      height="512">
    </gr-grid-board>
```

```css
    .gr-grid-rect {
      stroke: black;
      width: 64px;
      height: 64px;
      rx: 8;
      ry: 8;
    }

    .gr-grid-rect.selected {
      fill: black;
    }

    .gr-grid-rect.unselected {
      fill: white;
    }
```

## Controller Example

```javascript
angular.module('testGridBoard', ["grGridBoard"])
	.controller('TestGridBoardController', function($scope) {
		$scope.boardValue = [
			[true, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, true]
		];

		$scope.clickEvent = '';

		$scope.clicado = function(line, column, value, countSelected, values) {
			$scope.clickEvent = line + '/' + column + '/' + value + '/' + countSelected;
		}
	});
```

output:

![alt tag](https://raw.githubusercontent.com/ericogr/grGridBoard/master/docs/grid-01.png "grid board 8x8 example")
