app.directive('header', function () {
    return {
        restrict: 'A', 
        replace: true,
        templateUrl: "directives/header.html",
    }
});

app.directive('copytext', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "directives/copytext.html",
    }
});
app.directive('spintemplate', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "directives/spintemplate.html",
    }
});
app.directive('spintext', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "directives/spintext.html",
    }
});