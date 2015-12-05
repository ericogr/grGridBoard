angular.module('grGridBoard').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('gr-grid-board-template',
    "<svg xmlns=\"http://www.w3.org/2000/svg\" ng-attr-viewBox=\"{{viewBox}}\">\n" +
    "\t<rect \n" +
    "\t\tng-repeat=\"pos in positions\"\n" +
    "\t\tclass=\"gr-grid-rect gr-grid-rect-{{pos.line}}x{{pos.column}}\"\n" +
    "\t\tng-class=\"{selected: values[pos.line][pos.column], unselected: !values[pos.line][pos.column]}\"\n" +
    "\t\tng-click=\"clickRect(pos.line, pos.column)\"\n" +
    "\t\tng-attr-x=\"{{pos.x}}\" ng-attr-y=\"{{pos.y}}\">\n" +
    "\t</rect>\n" +
    "</svg>"
  );

}]);
