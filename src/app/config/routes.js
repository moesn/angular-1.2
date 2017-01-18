'use strict';

angular.module('app').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider.state('admin', {
            url: '/admin'
        }).state('profile', {
            url: '/profile',
            views: {
                content: {
                    template: require('./../profile/profile.html'),
                    controller: 'ProfileCtrl'
                }
            }
        }).state('web1', {
            url: '/web1',
            views: {
                content: {
                    templateUrl: 'web1'
                }
            }
        }).state('web2', {
            url: '/web2',
            views: {
                content: {
                    templateUrl: 'web2'
                }
            }
        }).state('web3', {
            url: '/web3',
            views: {
                content: {
                    templateUrl: 'web3'
                }
            }
        });

        $urlRouterProvider.otherwise('admin');
        $locationProvider.html5Mode(false);
    }
]);

