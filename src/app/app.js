'use strict';

require('angular');
require('../style/app.css');

angular.module('app', [])
    .directive('app', function () {
            return {
                restrict: 'E',
                template: require('./app.html')
            };
        }
    ).controller('AppCtrl', ['$scope', function ($scope) {

    }]
);
