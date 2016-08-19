app.controller('TeasController', function ($scope, TeaService, $location) {
  $scope.view = {};
  $scope.view.cart = TeaService.shoppingCart
  $scope.view.teas = TeaService.all;
  $scope.view.add = function(tea){
    TeaService.add(tea)
  }
  $scope.view.checkout = function(){
    $location.path('/checkout')
  }
})

app.controller('CartController', function ($scope, TeaService) {
  $scope.view = {};
  $scope.view.showUpdate = false;
  $scope.view.orderTotal = TeaService.orderTotal;
  $scope.view.cart = TeaService.shoppingCart

  $scope.view.updateShow = function(){
    this.showUpdate = !this.showUpdate
};

  $scope.view.update = function(){
    TeaService.update()
    $scope.view.orderTotal = TeaService.orderTotal
    this.showUpdate = !this.showUpdate
  }
  $scope.view.remove = function(tea){
    TeaService.remove(tea)
    $scope.view.cart = TeaService.shoppingCart
    $scope.view.orderTotal = TeaService.orderTotal
  };
})
