app.controller('appCtrl', function($scope, $state,$log,$mdDialog) {

    $scope.login = function() {
        $state.go('home');
    };
    $scope.signup = function() {
        $state.go('home');
    };

  $scope.max = 2;
  $scope.selectedIndex = 0;
  $scope.nextTab = function() {
    var index = ($scope.selectedIndex == $scope.max) ? 0 : $scope.selectedIndex + 1;
    $scope.selectedIndex = index;

  };

  $scope.addSpin = function(spin,message){
    var index = ($scope.selectedIndex == $scope.max) ? 0 : $scope.selectedIndex + 1;
    $scope.selectedIndex = index;

        $scope.spinArray = [];
        for (var i = 0; i < spin; i++) {
               $scope.spinArray.push({"value":message});

           }

  };

});

