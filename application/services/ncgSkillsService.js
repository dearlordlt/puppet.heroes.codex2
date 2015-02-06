/**
 * Created by Sarunas on 2015.02.05.
 */

app.service("ncgSkillsService", function($http, $q){

    var deferred = $q.defer();
    $http.get('http://428412.s.dedikuoti.lt/4admin/index.php/rest/api/collections/get/NCGSkills?token=2e2ae4d4482b04fce4b4d9bc').then(function(data) {
        deferred.resolve(data);
    });
    this.getSkills = function() {
        return deferred.promise;
    };

});