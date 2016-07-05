'use strict';

angular.module('dimpApp')
  .controller('RaceTo100kController', function ($scope, $http) {
    var adkinsXuid = '2533274795734941',
      hallXuid = '2533274848557774';

    $http.get('https://dimp-api.herokuapp.com/api/gamers/' + adkinsXuid).then(function (response) {
      $scope.adkins = response.data.gamerscore;
    });

    $http.get('https://dimp-api.herokuapp.com/api/gamers/' + hallXuid).then(function (response) {
      $scope.hall = response.data.gamerscore;
    });
  });
