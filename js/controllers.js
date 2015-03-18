'use strict';

/* Controllers */
 
var jlspeechApp = angular.module('jlspeechApp', []);

jlspeechApp.controller('JlSpeechCtrl', function($scope) {

  $scope.questions = [
    {'snippet': 'Will my child\'s speech correct itself over time?'},
    {'snippet': 'Are my child\’s speech and language skills on track?'},
    {'snippet': 'How can I help my child communicate his wants and needs?'},
    {'snippet': 'Are my child’s speech patterns normal?'},
    {'snippet': 'My toddler is so frustrated! Is there anything I can do to help?'},
  ];


});
