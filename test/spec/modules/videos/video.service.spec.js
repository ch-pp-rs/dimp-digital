'use strict';

describe('Service: videoService', function () {
  var httpMock,
      videoService,
      SERVER,
      promiseResult = [];

  beforeEach(function () {
    angular.mock.module('dimpApp.videos');

    inject(function ($injector, $httpBackend, _SERVER_) {
      SERVER = _SERVER_;

      httpMock = $httpBackend;
      videoService = $injector.get('videoService');
    });
  });

  it('should get video by id', function () {
    var mockId = 123;
    httpMock.expectGET(SERVER.API + 'videos/' + mockId).respond(200, 'test1');

    videoService.gettingVideoById(mockId).then(function (response) {
      promiseResult = response.data;
    });

    httpMock.flush();
    expect(promiseResult).toBe('test1');
  });
});

