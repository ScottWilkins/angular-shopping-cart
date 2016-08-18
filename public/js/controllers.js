app.controller('TeasController', function ($scope, TeaService, $location) {
  $scope.view = {};
  $scope.view.teas = TeaService.all;
  $scope.view.add = function(quantity, id){
    TeaService.add(quantity, id)
  }
  $scope.view.checkout = function(){
    $location.path('/checkout')
  }
})

app.controller('CartController', function ($scope, TeaService) {
  $scope.view = {};
  $scope.view.orderTotal = TeaService.orderTotal();
  $scope.view.cart = TeaService.shoppingCart
  $scope.view.logs = function(){
    console.log($scope.view.orderTotal);
  };
  $scope.view.remove = function(id){

    TeaService.remove(id)
    console.log(TeaService.shoppingCart);
    $scope.view.cart = TeaService.shoppingCart
  };
})
