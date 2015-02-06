/**
 * Created by Sarunas on 2015.02.04.
 */

var app = angular.module('app', [
    'lumx',
    'ngRoute',
    'codexControllers',
    'btford.markdown'])

.config(['$routeProvider', 'markdownConverterProvider',
    function($routeProvider, markdownConverterProvider) {
        $routeProvider.
            when('/about', {
                templateUrl: 'partials/about.html',
                controller: 'aboutCtrl'
            }).
            when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'homeCtrl'
            }).
            when('/ncgskills', {
                templateUrl: 'partials/ncgskills.html',
                controller: 'ncgSkillsCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
        markdownConverterProvider.config({
            extensions: ['twitter']
        });
    }]);