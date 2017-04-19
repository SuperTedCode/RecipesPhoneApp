angular.module('starter.controllers', [])

.controller('LunchCtrl', function($scope) {})

.controller('MyControllers', function($scope, $cordovaCamera, $cordovaFile){
 
})



.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.$on('$ionicView.enter', function() {  //To populate the shopping cart count before window is open
    $("img[id='dessertOne']").attr("src", localStorage.dessertImgURL);
    $("h2[id='dessertOne']").html(localStorage.dessertName);
    $("p[id='dessertOne']").html(localStorage.dessertDesc);
  });
});



