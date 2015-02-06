/**
 * Created by Sarunas on 2015.02.06.
 */

codexControllers.controller('ncgSkillsCtrl', ['$scope', 'ncgSkillsService', function($scope, ncgSkillsService) {
    $scope.title = "NCG Skills";

    $scope.skills = {};

    var promise = ncgSkillsService.getSkills();
    promise.then(function(data) {
        $scope.skills = data;
        console.log("Skills loaded");
    });
}]);
