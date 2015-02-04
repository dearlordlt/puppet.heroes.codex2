/**
 * Created by Sarunas on 2015.02.04.
 */

angular.module('app', [
    'lumx',
    'ngRoute',
    'codexControllers'])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/about', {
                templateUrl: 'partials/about.html',
                controller: 'aboutCtrl'
            }).
            when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'homeCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);