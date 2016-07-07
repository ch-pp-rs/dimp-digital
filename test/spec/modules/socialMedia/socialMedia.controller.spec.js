'use strict';

describe('Controller: SocialMediaController', function () {
  var SocialMediaController,
      socialMediaService,
      scope;

  beforeEach(function () {
    module('dimpApp.socialMedia');

    inject(function ($controller, $rootScope, _socialMediaService_) {
      scope = $rootScope.$new();
      socialMediaService = _socialMediaService_;

      spyOn(socialMediaService, 'gettingTweets').and.callFake(function () {
        return {
          then: function (callback) {
            return callback({data: [1, 2, 3]});
          }
        };
      });

      SocialMediaController = $controller('SocialMediaController', {
        $scope: scope
      });
    })
  });

  it('should get list of twitter items', function () {
    expect(socialMediaService.gettingTweets).toHaveBeenCalled();
    expect(scope.posts.length).toBe(3);
  });
});
