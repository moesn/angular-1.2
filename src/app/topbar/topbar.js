'use strict';

require('./topbar.css');
angular.module('app').directive('topbar', function () {
    return {
        restrict: 'E',
        template: require('./topbar.html'),
        replace: true,
        controller: ['$scope', '$http', function ($scope, $http) {
            $('.sidebar-fold').click(function () {
                var sidebar = $('.layui-nav-side');
                var laybody = $('.layui-body');

                if (sidebar.width() === 200) {
                    laybody.animate({
                        left: '0'
                    });
                    sidebar.animate({
                        width: '0'
                    });
                } else {
                    laybody.animate({
                        left: '200px'
                    });
                    sidebar.animate({
                        width: '200px'
                    });
                }
            });
            // $http.get('mock/sidebar.json').then(function (success) {
            //     $scope.navs = success.data;
            // });
        }]
    };
});