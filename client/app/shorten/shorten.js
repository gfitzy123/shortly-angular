angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = ''
  $scope.addLink = function(){
    Links.shorten($scope.link)
    .then(function(data){
      console.log("Getting links to shorten: " + data)
      $scope.link = data;
    }).catch(function(err){
      console.log('tried to shorten and failed')
      console.error(err)
    })

  }
});
