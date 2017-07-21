const fsApp = angular.module('fsApp',[]);

fsApp.factory('fsService', function() {
  const service = {};

  service.collection = ["A","B","C"];
  service.value = "A";

  return service;
});

fsApp.controller('FsCtrl', function(fsService) {
  const controller = {};

  controller.myObject = fsService.collection;
  controller.myFavoriteValue = fsService.value;

  return controller;;
});

fsApp.directive('fsPercentage', function() {
  return {
    controller: ['$scope', function FsPercentageController($scope) {
      $scope.percentageValid = $scope.percentageInput >= 0
        && $scope.percentageInput <= 1;

      $scope.percentageOutput = $scope.percentageValid ?
        `${Math.round(100 * $scope.percentageInput)}%` : '';
    }],
    template: '',
  };
});
