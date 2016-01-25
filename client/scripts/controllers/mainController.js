myApp.controller('MainController', ['$scope', '$location', '$window', function($scope, $location, $window) {

    $scope.showMenu = false;

    $scope.isActive = function(route){
        return route === $location.path();
    };

    $scope.toggleMenu = function() {
        $scope.showMenu = !$scope.showMenu;
    };

    $window.onscroll = function(){
        $scope.showMenu = false;
        $scope.$apply();
    };

}]);