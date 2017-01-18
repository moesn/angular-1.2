'use strict';

window.$ = layui.jquery;
require('./app.css');

angular.module('app', ['ui.router', 'profile']).run(
    function () {
    }
).controller('AppCtrl', ['$scope', '$http', '$timeout',
    function ($scope, $http, $timeout) {
        window.$Root = $scope.$root;
        window.onload = function () {
            layui.use('element');
            $timeout(function () {
                $scope.$root.onload = true;
            });
        };
    }
]).directive('app', function () {
    return {
        restrict: 'E',
        template: require('./app.html'),
        replace: true
    };
});

require('./config/apis');
require('./config/routes');

require('./profile/profile');
require('./sidebar/sidebar');
require('./topbar/topbar');
