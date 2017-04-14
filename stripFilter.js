verizonApp.filter('strip', function () {
    return function (input, stripWhat) {
        if (angular.isArray(stripWhat)) {
            angular.forEach(stripWhat, function (strip) {
                input = input.replace(strip, "");
            });
        } else {
            input = input.replace(stripWhat, "");
        }
        return input;
    }
});