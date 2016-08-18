app.controller('TeasController', function ($scope, TeaService, $location) {
  $scope.view = {};
  $scope.view.teas = TeaService.all;
  $scope.view.add = function(quantity, id){
    console.log(quantity + "  " + id);
  }
  $scope.view.checkout = function(){
    $location.path('/checkout')
  }
})

app.controller('CartController', function ($scope, TeaService) {
  $scope.view = {};
  $scope.view.cart = TeaService.shoppingCart
  $scope.view.add = function(quantity, id){
    console.log(quantity + "  " + id);
  }
})
