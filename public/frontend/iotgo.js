angular.module('iotgo', [ 'ngRoute', 'ngResource', 'gRecaptcha', 'angular-carousel' ]).
  config([ '$routeProvider', '$locationProvider', '$httpProvider',
    function ($routeProvider, $locationProvider, $httpProvider) {
      $routeProvider.
        when('/', {
          templateUrl: '/views/index.html',
          controller: 'IndexCtrl'
        }).
        when('/login', {
          templateUrl: '/views/login.html',
          controller: 'LoginCtrl'
        }).
        when('/signup', {
          templateUrl: '/views/signup.html',
          controller: 'SignupCtrl'
        }).
        when('/profile', {
          templateUrl: '/views/profile.html',
          controller: 'ProfileCtrl'
        }).
        when('/devices', {
          templateUrl: '/views/devices.html',
          controller: 'DevicesCtrl'
        }).
        when('/pricing', {
          templateUrl: '/views/pricing.html'
        }).
        when('/about', {
          templateUrl: '/views/about.html'
        }).
        when('/guide', {
          templateUrl: '/views/guide.html'
        }).
        when('/api', {
          templateUrl: '/views/api.html'
        }).
        when('/contact', {
          templateUrl: '/views/contact.html'
        }).
        when('/hardware', {
          templateUrl: '/views/hardware.html'
        }).
        otherwise({
          redirectTo: '/'
        });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

      $httpProvider.interceptors.push('authInterceptor');
    }
  ]);