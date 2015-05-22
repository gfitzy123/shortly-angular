angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.addLink = function(){
    $scope.link = {url: $scope.link };
    Links.shorten($scope.link)
    .then(function(data){
      console.log("Getting links to shorten: " + data)
      $scope.link = data;
      $location.path('/links');
    }).catch(function(err){
      console.log('tried to shorten and failed')
      console.error(err)
    })
  }
});
