angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(){
    Links.shorten()
    .then(function(data){
      console.log("Getting links to shorten: " + data)
      $scope.link = data;
    }).catch(function(err){
      console.error(err)
    })

  }
});
