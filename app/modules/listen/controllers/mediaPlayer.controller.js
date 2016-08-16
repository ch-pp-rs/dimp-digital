angular.module('dimpApp.listen')
    .controller('MediaPlayerController', function ($scope, $timeout, ngAudio, mediaPlayerService) {
      $scope.$on('dimp-audio-play', function(event, args){
        // args is the search results
        // from the searchService
        console.log(args);

        if ($scope.audio) {
          $scope.audio.restart();
        }

        $scope.audioInfo = args;

        $scope.audio = ngAudio.load(args.url);
        $scope.audio.play();

        $timeout(function () {
          $scope.disableProgressBar = false;
        }, 5000);
      });

      $scope.$on('dimp-playlist-updated', function(event, args){
        // args is the search results
        // from the searchService
        console.log(args);

        $scope.playList = args;
      });

      $scope.$watch('audio.remaining', function (timeLeft) {
        if (timeLeft <= 2) {
          $scope.disableProgressBar = true;
          mediaPlayerService.goToNextOnPlaylist();
        }
      });
    })
    .service('mediaPlayerService', function ($rootScope) {
      var playlist = [];

      this.playAudio = function (title, audioUrl, duration) {
        var audio = {
          title: title,
          url: audioUrl,
          duration: duration
        };

        playlist.unshift(audio);

        $rootScope.$broadcast('dimp-audio-play', audio);
      };

      this.addAudioToPlaylist = function (title, audioUrl, duration) {
        var audio = {
          title: title,
          url: audioUrl,
          duration: duration
        };

        playlist.push(audio);

        $rootScope.$broadcast('dimp-playlist-updated', playlist);
      };

      this.goToNextOnPlaylist = function () {
        if (playlist.length >= 1) {
          playlist.shift();
          $rootScope.$broadcast('dimp-audio-play', playlist[0]);
        }
      };
    });
