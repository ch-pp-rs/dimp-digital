'use strict';

angular.module('dimpApp').controller('SocialController', function ($scope, $http) {
  $http.get('https://dimp-api.herokuapp.com/api/twitter').then(function (response) {
    $scope.posts = response.data;
  });
});
