var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/main',{
            templateUrl: "/assets/views/routes/about.html"
        })
        .when('/portfolio',{
            templateUrl: "/assets/views/routes/portfolio.html"
        })
        .when('/contact',{
            templateUrl: "/assets/views/routes/contact.html"
        })
        .when('/openarms',{
            templateUrl: "/assets/views/routes/openarms.html"
        })
        .when('/graceskitchen',{
            templateUrl: "/assets/views/routes/graceskitchen.html"
        })
        .when('/puiandrod',{
            templateUrl: "/assets/views/routes/puiandrod.html"
        })
        .otherwise('/main');

}]);