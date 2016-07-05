'use strict';

angular.module('dimpApp')
  .controller('FantasyDraftController', function ($scope, $http) {
    var starFoxZero = 'http://www.gamerankings.com/wii-u/805613-star-fox-zero/index.html',
      gearsOfWar4 = 'http://www.gamerankings.com/xboxone/895574-gears-of-war-4/index.html',
      metroidPrime = 'http://www.gamerankings.com/3ds/168673-metroid-prime-federation-force/index.html',
      pokemonGo = 'http://www.gamerankings.com/iphone/180966-pokemon-go/index.html',
      plantsVsZombies2 = 'http://www.gamerankings.com/ps4/167077-plants-vs-zombies-garden-warfare-2/index.html',
      unchartedFour = 'http://www.gamerankings.com/ps4/739573-uncharted-4-a-thiefs-end/index.html',
      streetFighterV = 'http://www.gamerankings.com/pc/895977-street-fighter-v/index.html',
      xcom2 = 'http://www.gamerankings.com/pc/163467-xcom-2/index.html',
      deusEx = 'http://www.gamerankings.com/pc/142236-deus-ex-mankind-divided/index.html',
      noMansSky = 'http://www.gamerankings.com/pc/739859-no-mans-sky/index.html',
      darkSouls3 = 'http://www.gamerankings.com/pc/168567-dark-souls-iii/index.html',
      theLastGuardian = 'http://www.gamerankings.com/ps4/952634-the-last-guardian/index.html',
      recore = 'http://www.gamerankings.com/xboxone/168543-recore/index.html',
      massEffect = 'http://www.gamerankings.com/pc/689997-mass-effect-andromeda/index.html',
      doom = 'http://www.gamerankings.com/pc/805860-doom/index.html';

    $scope.players = [
      {
        name: 'Hall',
        picks: [
          {
            pickNo: 1,
            url: starFoxZero
          }, {
            pickNo: 4,
            url: gearsOfWar4
          }, {
            pickNo: 7,
            url: metroidPrime
          }, {
            pickNo: 10,
            url: pokemonGo
          }, {
            pickNo: 13,
            url: plantsVsZombies2
          }
        ]
      }, {
        name: 'Apps',
        picks: [
          {
            pickNo: 2,
            url: unchartedFour
          }, {
            pickNo: 5,
            url: streetFighterV
          }, {
            pickNo: 8,
            url: xcom2
          }, {
            pickNo: 11,
            url: deusEx
          }, {
            pickNo: 14,
            url: noMansSky
          }
        ]
      }, {
        name: 'Logan',
        picks: [
          {
            pickNo: 3,
            url: darkSouls3
          }, {
            pickNo: 6,
            url: theLastGuardian
          }, {
            pickNo: 9,
            url: recore
          }, {
            pickNo: 12,
            url: massEffect
          }, {
            pickNo: 15,
            url: doom
          }
        ]
      }
    ];

    $scope.picks = [];

    angular.forEach($scope.players, function (player) {
      player.score = 0;

      angular.forEach(player.picks, function (pick) {
        $http.get('https://dimp-api.herokuapp.com/api/games/' + encodeURIComponent(pick.url)).then(function (response) {
          var pickObj = {};
          pickObj.name = player.name;
          pickObj.game = response.data.results[0];
          pickObj.pickNo = pick.pickNo;

          $scope.picks.push(pickObj);

          if (response.data.results[0].rating) {
            player.score += parseInt(response.data.results[0].rating.replace('%', ''));
          }
        });
      });
    }, $scope.players);
  });
