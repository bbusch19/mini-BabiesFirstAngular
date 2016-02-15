var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {
  $scope.friends = ['Geoff', 'Miles', 'Scott', 'Kory'];

  $scope.addFriend = function() {
    $scope.friends.push($scope.newFriend);
  }
});
