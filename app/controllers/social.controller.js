'use strict';

angular.module('dimpApp').controller('SocialController', function ($scope, $http) {
  $http.get('https://dimp-api.herokuapp.com/api/twitter').then(function (response) {
    console.log(response.data[5]);
    $scope.posts = response.data;
  });
});
