'use strict';

angular.module('profile', []).controller('ProfileCtrl', ['$scope',
    function ($scope) {
        console.log('My name is ProfileCtrl');
    }]
);

require('./config');