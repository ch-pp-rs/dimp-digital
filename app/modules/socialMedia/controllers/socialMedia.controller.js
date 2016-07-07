'use strict';

angular.module('dimpApp.socialMedia')
    .controller('SocialMediaController', function ($scope, socialMediaService) {
      socialMediaService.gettingTweets().then(function (response) {
        $scope.posts = response.data;
      })
    });
