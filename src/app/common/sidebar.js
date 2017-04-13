'use strict';

module.exports = function (module) {
    module.directive('sidebar', function () {
        return {
            restrict: 'E',
            templateUrl: 'sidebar.html',
            scope: true,
            replace: true,
            controller: 'SidebarCtrl'
        };
    });

    module.controller('SidebarCtrl', ['$scope', '$http', '$timeout',
        function ($scope, $http, $timeout) {
            $scope.navItems = [
                {
                    name: '模块管理',
                    children: [
                        {name: '模块一', id: '2'},
                        {name: '模块二', id: '3'}
                    ]
                }, {
                    name: '身份管理',
                    children: [
                        {name: '身份一', id: '4'},
                        {name: '身份二', id: '5'}
                    ]
                }
            ];

            $scope.init = function () {
                layui.element().init();
            };
        }
    ]);
};
