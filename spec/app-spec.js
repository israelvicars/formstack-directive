describe('Controller: FsCtrl', () => {
  let scope;
  let FsCtrl;
  let serviceMock;

  beforeEach(module('fsApp'));

  serviceMock = {
    collection: [7, 9, 42],
    value: 42
  };

  beforeEach(inject(
    function ($controller, $rootScope) {
      scope = $rootScope.$new();

      FsCtrl = $controller('FsCtrl', {
        $scope: scope,
        fsService: serviceMock,
      });

      scope.$apply();
    },
  ));

  it('mocks the service used in the controller', () => {
    expect(FsCtrl.myObject).toEqual([7,9,42]);
    expect(FsCtrl.myFavoriteValue).toBe(42);
  });

});
