'use strict';

/**
 * @ngdoc overview
 * @name dimpApp
 * @description
 * # dimpApp
 *
 * Main module of the application.
 */
angular.module('dimpApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'slugifier'
]).config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      abstract: true,
      templateUrl: 'views/main.html',
      url: '/app'
    })
    .state('app.fantasyDraft', {
      controller: 'FantasyDraftController',
      templateUrl: 'views/fantasy-gaming-draft.html',
      url: '/fantasy-gaming-draft'
    })
    .state('app.raceTo100k', {
      controller: 'RaceTo100kController',
      templateUrl: 'views/race-to-100k.html',
      url: '/race-to-100k'
    })
    .state('app.read', {
      controller: 'ReadController',
      templateUrl: 'views/read.html',
      url: '/read/:pageNo'
    })
    .state('app.article', {
      controller: 'ReadArticleController',
      templateUrl: 'views/read-article.html',
      url: '/post/:articleId/:title'
    })
    .state('app.watch', {
      controller: 'VideosController',
      templateUrl: 'views/video-list.html',
      url: '/watch'
    })
    .state('app.watchVideo', {
      controller: 'WatchVideoController',
      templateUrl: 'views/video.html',
      url: '/video/:id'
    })
    .state('app.listen', {
      controller: 'ListenController',
      templateUrl: 'views/listen.html',
      url: '/listen/:pageNo'
    });

  $urlRouterProvider.otherwise('/app/watch');
});