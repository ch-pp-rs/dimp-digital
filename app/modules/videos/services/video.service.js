'use strict';

angular.module('dimpApp.videos').service('videoService', function ($http, SERVER) {
  this.gettingVideoById = function (videoId) {
    return $http.get(SERVER.API + 'videos/' + videoId);
  };
});
