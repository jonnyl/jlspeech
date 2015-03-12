'use strict';

/* Controllers */
 
var jlspeechApp = angular.module('jlspeechApp', []);

jlspeechApp.controller('TestimonialCtrl', function($scope) {
  $scope.testimonials = [
    {'name': 'Client X',
     'snippet': 'Jackie is awesome and here is why.'},
    {'name': 'Client Y',
     'snippet': 'Jackie is awesome and here is why and this is how.'},
    {'name': 'Client Z',
     'snippet': 'Jackie is awesome and here is why and this is how and this is when.'},
  ];
});
