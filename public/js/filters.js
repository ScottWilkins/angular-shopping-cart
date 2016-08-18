app.filter('decimal', function () {
  return function (input) {
    return input/100
  };
});
