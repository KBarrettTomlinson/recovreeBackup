myApp.controller('HomeController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('HomeController sourced!');
  var onHome = UserService.onHome;
  onHome();
  $scope.sessionObject = UserService.sessionObject;

  $scope.launchReflection = function(){
    $location.path('/reflection-form/reflect-1');
  };
}]);
