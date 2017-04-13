/**
 * Created by zhaohuaming.
 */
'use strict';

var admin = angular.module('admin', ['ui.router']).run(
    function () {
    }
).controller('AdminCtrl', ['$scope', '$http', '$timeout',
    function ($scope, $http, $timeout) {
    }
]);

require('./config/apis')(admin);
require('./config/routes')(admin);

require('./common/topbar')(admin);
require('./common/sidebar')(admin);
require('./common/repeat.finish')(admin);

require('./module/module')(admin);

angular.bootstrap(document, ['admin']);