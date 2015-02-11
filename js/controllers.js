'use strict';

/* Controllers */
 
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
  $scope.phones = [
    {'name': 'Client X',
     'snippet': 'Jackie is awesome and here is why.'},
    {'name': 'Client Y',
     'snippet': 'Jackie is awesome and here is why and this is how.'},
    {'name': 'Client Z',
     'snippet': 'Jackie is awesome and here is why and this is how and this is when.'},
  ];
});
