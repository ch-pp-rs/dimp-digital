angular.module('dimpApp.listen')
  .controller('PodcastsController', function ($scope, $http, SERVER, ngAudio, mediaPlayerService) {
    function getDurationInSeconds (duration) {
      var durationSplit = duration.split(':'),
          durationInSeconds = 0;

      durationInSeconds += durationSplit[0] * 3600;
      durationInSeconds += durationSplit[1] * 60;
      durationInSeconds += parseInt(durationSplit[2]);

      return durationInSeconds;
    }

    $http.get(SERVER.API + 'podcasts').then(function (response) {
      $scope.podcasts = response.data;
    });

    $scope.playPod = function (index) {
      var duration = getDurationInSeconds($scope.podcasts[index]['itunes:duration']['#']),
          title = $scope.podcasts[index].title;

      mediaPlayerService.playAudio(title, $scope.podcasts[index].enclosures[0].url, duration);
    };

    $scope.addPodToPlaylist = function (index) {
      var duration = getDurationInSeconds($scope.podcasts[index]['itunes:duration']['#']),
          title = $scope.podcasts[index].title;

      mediaPlayerService.addAudioToPlaylist(title, $scope.podcasts[index].enclosures[0].url, duration);
    };
  });
