app.controller('TeasController', function ($scope, TeaService) {
  $scope.view = {};
  $scope.view.teas = TeaService.all;
  $scope.view.add = function(quantity, tea){
    console.log(quantity + "  " + tea.price);
  }
})
