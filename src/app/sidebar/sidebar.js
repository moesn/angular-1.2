'use strict';

require('./sidebar.css');
angular.module('app').directive('sidebar', function () {
    return {
        restrict: 'E',
        template: require('./sidebar.html'),
        replace: true,
        scope: {
            menuData: '='
        },
        controller: ['$scope', '$http',
            function ($scope, $http) {
                $scope.$on('$stateChangeStart', function () {
                    $scope.$root.onload = false;
                });

                $scope.$on('$stateChangeSuccess', function (event, toState, tf, fromState) {
                    var from = fromState.name;
                    var to = toState.name;
                    $scope.$root._APP_NAME = to.split('.')[0];

                    if (to.indexOf('.') === -1) {
                        if (from && from !== to) window.location.reload();
                        $http.get(to + '/sidebar.json').then(function (success) {
                            $scope.navs = success.data;
                        });
                    }
                });
            }
        ]
    };
});