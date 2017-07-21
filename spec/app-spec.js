describe('Directive: fsPercentage', () => {
  let element;
  let scope;
  let ngModel;

  beforeEach(module('fsApp'));

  beforeEach(inject(function($compile, $rootScope) {
    scope = $rootScope.$new();
    element = angular.element(
      `<form name="myForm">
        <input name="myInput" ng-model="myInput" required fs-percentage>
      </form>`,
    );

    const input = $compile(element)(scope);

    ngModel = input.controller('ngModel');
  }));

  it('should be valid for values between 0 and 1', function() {
    element.val(0);
    element.triggerHandler('blur');
    scope.$digest();
    expect(scope.myForm.myInput.$valid).toBeTruthy();

    element.val(0.5);
    element.triggerHandler('blur');
    scope.$digest();
    expect(scope.myForm.myInput.$valid).toBeTruthy();

    element.val(1);
    element.triggerHandler('blur');
    scope.$digest();
    expect(scope.myForm.myInput.$valid).toBeTruthy();
  });

  it('should be invalid for values less than 0 or more than 1', function() {
    element.val(-1);
    scope.$digest();
    expect(scope.myForm.myInput.$valid).toBeFalsy();

    element.val(2);
    scope.$digest();
    expect(scope.myForm.myInput.$valid).toBeFalsy();
  });
});
