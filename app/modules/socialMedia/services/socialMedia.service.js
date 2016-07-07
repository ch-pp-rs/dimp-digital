'use strict';

angular.module('dimpApp.socialMedia').service('socialMediaService', function ($http, SERVER) {
  this.gettingTweets = function () {
    return $http.get(SERVER.API + 'twitter');
  };
});
