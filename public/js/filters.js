app.filter('redact', function () {
  return function (input, word) {
    return input.replace(word, "REDACT");
  };
});
