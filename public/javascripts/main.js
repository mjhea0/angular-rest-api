var demoAPI = angular.module('demoAPI', []);

function mainController($scope, $http) {
  $http.get('/api/v1/campaigns')
  .success(function(campaigns) {
    console.log(campaigns["total_campaigns"])
    $scope.campaigns = campaigns["total_campaigns"];
  })
  .error(function(campaigns) {
    console.log('Error: ' + campaigns);
  });
}
