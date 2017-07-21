const fsApp = angular.module('fsApp',[]);

fsApp.directive('fsPercentage', function() {
  return {
  	restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, modelCtrl) {
      function percentageValidation(value) {
        const valid = (value >= 0 && value <= 1);

        modelCtrl.$setValidity('percentage', valid);

        return value;
      }

      modelCtrl.$parsers.push(percentageValidation);

      const input = attrs.ngModel;

      scope.$watch(attrs.ngModel, (value) => {
      	if (value >= 0 && value <= 1) {
      		element.on("blur", () => element.val(`${Math.round(100 * value)}%`));
      	}
      });
    },
  };
});
