app.controller('TeasController', function ($scope, TeaService) {
  $scope.view = {};
  $scope.view.teas = TeaService.all;
})
