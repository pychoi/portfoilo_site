myApp.controller('MainController', ['$scope', '$location', function($scope, $location) {

    $scope.showMenu = false;

    $scope.isActive = function(route){
        return route === $location.path();
    };

    $scope.toggleMenu = function() {
        console.log("showMenu", $scope.showMenu);
        $scope.showMenu = !$scope.showMenu;
    };



}]);