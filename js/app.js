const fsApp = angular.module('fsApp',[]);

fsApp.controller('FsPercentageCtrl', ['$scope', function($scope) {
  $scope.percentageValid = $scope.percentageInput >= 0
    && $scope.percentageInput <= 1;

  $scope.percentageOutput = $scope.percentageValid ?
    `${Math.round(100 * $scope.percentageInput)}%` : '';
}]);

fsApp.directive('fsPercentage', ['FsPercentageCtrl', function(FsPercentageCtrl) {
  return {
    controller: FsPercentageCtrl,
    template: '',
  };
}]);
