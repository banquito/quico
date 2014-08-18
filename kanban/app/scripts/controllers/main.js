'use strict';

/**
 * @ngdoc function
 * @name kanbanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kanbanApp
 */
angular.module('kanbanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.kanban = {
    	todo: [],
    	doing: [],
    	done: [{ title: 'good work!'}]
    };

    $scope.add = function() {
    	$scope.kanban.todo.push({ title: 'new task' });
    };

    $scope.dropOnTodo=function(item){
			$scope.kanban.done.splice($scope.kanban.done.indexOf(item), 1);
      $scope.kanban.todo.push(item);
    };

    $scope.dropOnDoing=function(data){
      console.log('drag success, data:', data);
    };

    $scope.dropOnDone=function(data){
      console.log('drag success, data:', data);
    };
  });
