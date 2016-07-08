'use strict';

describe('Service: socialMediaService', function () {
  var httpMock,
      socialMediaService,
      SERVER,
      promiseResult = [];

  beforeEach(function () {
    angular.mock.module('dimpApp.socialMedia');

    inject(function ($injector, $httpBackend, _SERVER_) {
      SERVER = _SERVER_;

      httpMock = $httpBackend;
      socialMediaService = $injector.get('socialMediaService');
    });
  });

  it('should get tweets', function () {
    httpMock.expectGET(SERVER.API + 'twitter').respond(200, 'test1');

    socialMediaService.gettingTweets().then(function (response) {
      promiseResult = response.data;
    });

    httpMock.flush();
    expect(promiseResult).toBe('test1');
  });
});

