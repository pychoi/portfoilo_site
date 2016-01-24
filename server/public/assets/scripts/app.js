var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/main',{
            templateUrl: "/assets/views/routes/about.html",
            controller: 'MyController'
        })
        .when('/portfolio',{
            templateUrl: "/assets/views/routes/portfolio.html",
            controller: 'MyController'
        })
        .when('/contact',{
            templateUrl: "/assets/views/routes/contact.html",
            controller: 'MyController'
        })
        .when('/openarms',{
            templateUrl: "/assets/views/routes/openarms.html",
            controller: 'MyController'
        })
        .when('/graceskitchen',{
            templateUrl: "/assets/views/routes/graceskitchen.html",
            controller: 'MyController'
        })
        .when('/puiandrod',{
            templateUrl: "/assets/views/routes/puiandrod.html",
            controller: 'MyController'
        })
        .otherwise('/main');

}]);

myApp.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            scope.showMenu = false;
            scope.$apply();
        });
    };
});