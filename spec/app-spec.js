describe('Controller: FsPercentageCtrl', () => {
  let ngController;

  beforeEach(module('fsApp'));

  beforeEach(inject(function ($controller) {
    ngController = $controller;
  }));

  it('returns valid and returns a percentage from a valid float input', () => {
    const percentageInput = 0.5;
    const $scope = { percentageInput };
    const controller = ngController('FsPercentageCtrl', { $scope });

    expect($scope.percentageValid).toBe(true);
    expect($scope.percentageOutput).toEqual('50%');
  });

  it('returns invalid and returns no percentage if input is below 0', () => {
    const percentageInput = -1.0;
    const $scope = { percentageInput };
    const controller = ngController('FsPercentageCtrl', { $scope });

    expect($scope.percentageValid).toBe(false);
    expect($scope.percentageOutput).toEqual('');
  });

  it('returns invalid and returns no percentage if input is above 1', () => {
    const percentageInput = 2.0;
    const $scope = { percentageInput };
    const controller = ngController('FsPercentageCtrl', { $scope });

    expect($scope.percentageValid).toBe(false);
    expect($scope.percentageOutput).toEqual('');
  });
});
