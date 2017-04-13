/**
 * Created by zhaohuaming.
 */
'use strict';

module.exports = function (module) {
    module.directive('repeatFinish', ['$timeout', function ($timeout) {
        return {
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        scope.$eval(attr.repeatFinish);
                    });
                }
            }
        };
    }]);
};