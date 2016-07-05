'use strict';

angular.module('dimpApp')
  .controller('ReadController', function ($scope, $http, $filter, $state, Slug) {
    $scope.pageNo = parseInt($state.params.pageNo);
    $scope.nextPage = $scope.pageNo + 1;

    if ($scope.pageNo > 1) {
      $scope.previousPage = $scope.pageNo - 1;
    } else {
      $scope.previousPage = null;
    }

    $http.get('http://dimpdigital.com/wp-json/wp/v2/posts?categories=1,2,75,93,94&page=' + $scope.pageNo).then(function (response) {
      if (response.data.length < 10) {
        $scope.nextPage = null;
      }

      $scope.posts = [];
      angular.forEach(response.data, function (post) {
        post.excerpt.rendered = post.excerpt.rendered.replace(/<a\b[^>]*>(.*?)<\/a>/i, '...');
        post.date = $filter('date')(post.date, 'medium');

        post.urlTitle = Slug.slugify(post.title.rendered.replace(' – ', ''));
        post.urlTitle = post.urlTitle.replace('8211', '');
        $scope.posts.push(post);
      }, $scope.posts);
    });
  })
  .controller('ReadArticleController', function ($scope, $stateParams, $http, $sce) {
    $http.get('http://dimpdigital.com/wp-json/wp/v2/posts/' + $stateParams.articleId).then(function (response) {
      $scope.post = response.data;
      $scope.content = $sce.trustAsHtml(response.data.content.rendered);
    });
  });
