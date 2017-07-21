const fsApp = angular.module('fsApp',[]);

fsApp.directive('fsPercentage', fsPercentage);

function fsPercentage() {
  return {
  	restrict: 'A',
    require: 'ngModel',
    link,
  };

  function link (scope, element, attrs, modelCtrl) {
    modelCtrl.$parsers.push(percentageValidation);

    scope.$watch(attrs.ngModel, (value) => {
      if (percentValid(value)) {
        element.on('blur', () => element.val(`${Math.round(100 * value)}%`));
      }
    });

    function percentageValidation(value) {
      const valid = percentValid(value);
      modelCtrl.$setValidity('percentage', valid);
      return value;
    }

    function percentValid(value) {
      return (value >= 0 && value <= 1);
    }
  }
};
