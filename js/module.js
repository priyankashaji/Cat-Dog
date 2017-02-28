var app = angular.module('Lab14',['ngRoute']);
app.config(function($routeProvider,$locationProvider){
  $routeProvider
    .when('/dog',{
      controller:'controllerOne',
      templateUrl:'dog.html'
    })
    .when('/cat',{
      controller:'controllerTwo',
      templateUrl:'cat.html'
    })
    .when('/dove',{
      controller:'controllerThree',
      templateUrl:'dove.html'
    })
    .otherwise({redirectTo:'/'});
    $locationProvider.hashPrefix('');
});
