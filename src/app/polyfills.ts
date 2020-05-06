if (!Element.prototype.matches) {
    Element.prototype.matches = (<any>Element.prototype).msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;
}

import '@webcomponents/shadydom/shadydom.min.js';
import '@webcomponents/custom-elements/src/native-shim';
import '@webcomponents/custom-elements/custom-elements.min';
import 'reflect-metadata';
import 'core-js/es/symbol';
import 'core-js/es/object';
import 'core-js/es/function';
import 'core-js/es/parse-int';
import 'core-js/es/parse-float';
import 'core-js/es/number';
import 'core-js/es/math';
import 'core-js/es/string';
import 'core-js/es/date';
import 'core-js/es/array';
import 'core-js/es/regexp';
import 'core-js/es/map';
import 'core-js/es/set';
import 'core-js/es/reflect';

import 'zone.js/dist/zone';



