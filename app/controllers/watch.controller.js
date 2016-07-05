angular.module('dimpApp')
  .controller('VideosController', function ($scope, $filter, $http, $sce) {
    $scope.playerVars = {
      rel: 0,
      showinfo: 0,
      modestbranding: 0
    };

    $http.get('https://dimp-api.herokuapp.com/api/videos').then(function (response) {
      if (response.data.items.length < 50) {
        $scope.noMoreItemsAvailable = true;
      }

      $scope.videos = [];
      angular.forEach(response.data.items, function (video) {
        if (video.snippet.title.indexOf('Podcast') === -1) {
          video.snippet.publishedAt = $filter('date')(video.snippet.publishedAt, 'medium');
          $scope.videos.push(video);
        }
      });
    });

    $scope.url = $sce.trustAsResourceUrl('http://player.twitch.tv/?channel=dimpdigital');
  })
  .controller('WatchVideoController', function ($scope, $stateParams, $http, $sce) {
    $scope.showVideo = true;

    $http.get('https://dimp-api.herokuapp.com/api/videos/' + $stateParams.id).then(function (response) {
      $scope.video = response.data.items[0].snippet;
    });

    $scope.url = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $stateParams.id + '?modestbranding=1');
  });
