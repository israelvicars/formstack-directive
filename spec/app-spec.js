describe('Controller: FsCtrl', () => {
  let ngController;

  beforeEach(module('fsApp'));

  beforeEach(inject(function ($controller) {
      ngController = $controller;
  }));

  it('displays a percentage from a float', () => {
    const percentageInput = 0.5;
    const $scope = { percentageInput };
    const controller = ngController('FsPercentageCtrl', { $scope });

    expect($scope.percentageOutput).toEqual('50%');
  });
});
