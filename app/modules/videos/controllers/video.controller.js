angular.module('dimpApp.videos')
  .controller('WatchVideoController', function ($scope, $stateParams, $sce, videoService) {
    $scope.showVideo = true;

    videoService.gettingVideoById($stateParams.id).then(function (response) {
      $scope.video = response.data.items[0].snippet;
    });

    $scope.url = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $stateParams.id + '?modestbranding=1');
  });
