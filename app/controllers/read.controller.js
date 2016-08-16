'use strict';

angular.module('dimpApp')
  .controller('ReadController', function ($scope, $http, $filter, $state, Slug, SERVER) {
    document.title = 'Read | Dimp Digital';

    $http.get(SERVER.API + 'articles').then(function (response) {
      $scope.articles = response.data;

      angular.forEach($scope.articles, function (article) {
        article.imageUrl = article.description.match((/\<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/))[1];
        article.description = article.description.replace(/<img[^>]*>/g, '');
        article.description = article.description.replace('Continue reading on Dimp Digital »', '');
      });
    });
  });
