/**
 * Created by zhaohuaming.
 */
'use strict';

angular.module('admin', []).run(
    function () {
    }
).controller('AdminCtrl', ['$scope', '$http', '$timeout',
    function ($scope, $http, $timeout) {
    }
]).directive('main', function () {
    return {
        restrict: 'E',
        templateUrl: 'main.html',
        replace: true,
        controller: ['$scope', function ($scope) {
            layui.form().render();
        }]
    };
});

// require('./config/apis');
// require('./config/routes');
//
// require('./profile/profile');
// require('./sidebar/sidebar');
// require('./topbar/topbar');

angular.bootstrap(document, ['admin']);