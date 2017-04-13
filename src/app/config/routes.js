'use strict';

module.exports = function (module) {
    module.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider.state('/', {
                url: '/'
            }).state('mk', {
                url: '/mk/{id}',
                views: {
                    content: {
                        templateUrl: '1.html',
                        controller: 'ProfileCtrl'
                    }
                }
            });

            $urlRouterProvider.otherwise('/');
            $locationProvider.html5Mode(false);
        }
    ]);
};