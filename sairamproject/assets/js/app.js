var app = angular.module('mainApp', ['ui.router','ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages']);
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('signin', {
            url: '/',
            templateUrl: 'templates/signin.html',
            controller: 'appCtrl'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'templates/signup.html',
            controller: 'appCtrl'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'templates/dashboard.html',
            controller: 'appCtrl'
        })
});



