'use strict';

/**
 * @ngdoc function
 * @name kanbanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kanbanApp
 */
angular.module('kanbanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
