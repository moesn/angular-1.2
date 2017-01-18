'use strict';

window.$ = layui.jquery;
require('./app.css');

angular.module('app', ['ui.router', 'profile']).run(
    function () {
    }
).controller('AppCtrl', ['$scope', '$http',
    function ($scope, $http) {
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
