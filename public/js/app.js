var app = angular.module("app", ['ngRoute'])
.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'partials/teas.html',
    controller: 'TeasController'
})
  .otherwise({
    templateUrl: 'partials/teas.html',
    controller: 'TeasController'
  })
})
