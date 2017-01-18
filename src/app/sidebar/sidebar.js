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
                $scope.$on('$stateChangeSuccess', function (event, toState) {
                    var name = toState.name;
                    $http.get(name + '/sidebar.json').then(function (success) {
                        $scope.navs = success.data;
                    });
                });
            }
        ]
    };
});