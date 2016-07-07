'use strict';

describe('Controller: FantasyDraftController', function () {
  beforeEach(module('dimpApp'));

  var FantasyDraftController,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    FantasyDraftController = $controller('FantasyDraftController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should create player list', function () {
    expect(scope.players.length).toBe(3);
  });
});
