'use strict';

angular.module('dimpApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'slugifier',
  'dimpApp.socialMedia',
  'dimpApp.videos'
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
        templateUrl: 'modules/videos/views/videos.html',
        url: '/watch'
      })
      .state('app.watchVideo', {
        controller: 'WatchVideoController',
        templateUrl: 'modules/videos/views/video.html',
        url: '/video/:id'
      })
      .state('app.listen', {
        controller: 'ListenController',
        templateUrl: 'views/listen.html',
        url: '/listen/:pageNo'
      })
      .state('app.social', {
        controller: 'SocialMediaController',
        templateUrl: 'modules/socialMedia/views/social-media.html',
        url: '/social'
      });

  $urlRouterProvider.otherwise('/app/watch');
});

angular.module('dimpApp.config', []).constant('SERVER', {
  'WP': 'http://staging.gravitysupplychain.com/',
  'API': 'https://dimp-api.herokuapp.com/api/'
});
