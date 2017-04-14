verizonApp.filter('strip', function () {
    return function (input, stripWhat) {
        if (angular.isArray(stripWhat)) {
            angular.forEach(stripWhat, function (strip) {
                var re = new RegExp(strip, 'g');
                input = input.replace(re, "");
            });
        } else {
            var re = new RegExp(stripWhat, 'g');
            input = input.replace(re, "");
        }
        return input;
    }
});