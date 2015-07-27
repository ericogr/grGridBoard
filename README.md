# AngularJS Grid Board [![Build Status](https://travis-ci.org/ericogr/grGridBoard.svg?branch=master)](http://travis-ci.org/ericogr/grGridBoard)

With this directive, you can create a dynamic grid board. When you click on any square, it makes visible or invisible.

## Usage
1. `bower install gr-grid-board`
2. Add `grGridBoard` as a module dependency to your app.
3. Insert the `gr-grid-board` directive into your template:

```html
<gr-grid-board
  values="boardValue" rows="{{boardRows}}" columns="{{boardCols}}"
  width="512" height="512"
  line-colour="black" selected-colour="black" unselected-colour="white">
</gr-grid-board>
```

## Controller Example

```javascript
angular.module('testGridBoard', ["grGridBoard"])
	.controller('TestGridBoardController', function($scope) {
		$scope.boardValue = [
				[true,false,true,false,true,false,true,false],
				[false,true,false,true,false,true,false,true],
				[true,false,false,false,false,false,true,false],
				[false,true,false,true,true,false,false,true],
				[true,false,false,true,true,false,true,false],
				[false,true,false,false,false,false,false,true],
				[true,false,true,false,true,false,true,false],
				[false,true,false,true,false,true,false,true]
				];
	});
```

output:

![alt tag](https://raw.githubusercontent.com/ericogr/grGridBoard/master/docs/grid-01.png "grid board 8x8 example")
