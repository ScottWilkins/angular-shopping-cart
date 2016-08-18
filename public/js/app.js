var app = angular.module("app", ['ngRoute'])
.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'partials/teas.html',
    controller: 'TeasController'
})
.when('/checkout',{
  templateUrl: 'partials/shoppingCart.html',
  controller: 'CartController'
})
  .otherwise({
    templateUrl: 'partials/teas.html',
    controller: 'TeasController'
  })
})
