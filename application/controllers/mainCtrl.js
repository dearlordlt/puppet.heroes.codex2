/**
 * Created by Sarunas on 2015.02.04.
 */

codexControllers.controller('MainController', ['$scope', '$location', function($scope, $location) {
    $scope.head = "Puppet Hero";

    $scope.go = function(path) {
        $location.path( path );
    }
}]);