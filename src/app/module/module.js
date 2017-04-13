'use strict';

module.exports = function (module) {
    module.controller('ProfileCtrl', ['$scope', '$stateParams',
        function ($scope, $stateParams) {
            console.log($stateParams);
        }]
    );
};