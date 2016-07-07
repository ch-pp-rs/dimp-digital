angular.module('dimpApp.videos')
  .controller('WatchVideoController', function ($scope, $stateParams, $http, $sce) {
    $scope.showVideo = true;

    $http.get('https://dimp-api.herokuapp.com/api/videos/' + $stateParams.id).then(function (response) {
      $scope.video = response.data.items[0].snippet;
    });

    $scope.url = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $stateParams.id + '?modestbranding=1');
  });
