angular.module('grGridBoard').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('gr-grid-board-template',
    "<svg xmlns=\"http://www.w3.org/2000/svg\" ng-attr-viewBox=\"{{viewBox}}\">\n" +
    "\t<rect \n" +
    "\t\tng-repeat=\"pos in positions\" ng-click=\"clickRect(pos.line, pos.column)\"\n" +
    "\t\tng-attr-x=\"{{pos.x}}\" ng-attr-y=\"{{pos.y}}\"\n" +
    "\t\tng-attr-width=\"{{rectWidth}}\" ng-attr-height=\"{{rectHeight}}\"\n" +
    "\t\tng-attr-stroke=\"{{lineColour}}\" ng-attr-fill=\"{{values[pos.line][pos.column] ? selectedColour : unselectedColour}}\" fill-opacity=\"1.0\" stroke-opacity=\"1.0\">\n" +
    "\t</rect>\n" +
    "</svg>"
  );

}]);
