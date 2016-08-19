app.controller('TeasController', function ($scope, TeaService, $location) {
  $scope.view = {};
  $scope.view.cart = TeaService.shoppingCart
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
  $scope.view.showUpdate = false;
  $scope.view.updateShow = function(){
    this.showUpdate = !this.showUpdate
};
  $scope.view.orderTotal = TeaService.orderTotal();
  $scope.view.cart = TeaService.shoppingCart
  $scope.view.logs = function(){
    console.log($scope.view.orderTotal);
  };
  $scope.view.update = function(id,quantity){
    TeaService.update(id, quantity)
    $scope.view.showUpdate = false;
  }
  $scope.view.remove = function(id){
    TeaService.remove(id)
    $scope.view.cart = TeaService.shoppingCart
  };
})
