var ipfsbm = angular.module('ipfsbm', ['ui.router'])

ipfsbm.config(function($urlRouterProvider,$stateProvider){
  $urlRouterProvider.otherwise('/')
  $stateProvider.state('bookmarks',{
    url: '/',
    templateUrl: 'bookmarks.html',
    controller: mainController
  })
})

function mainController($scope){
  $scope.getBookmarks = function(){
    var data = localStorage.getItem('ipfsfm-bookmarks')
    if(data === null) data = '[]'
    return JSON.parse(data)
  }
  $scope.setBookmarks = function(data){
    localStorage.setItem('ipfsfm-bookmarks',JSON.stringify(data))
    $scope.$broadcast('bookmarksChanged')
  }
  $scope.addBookmark = function(doClearFields){
    var list = $scope.getBookmarks()
    list.push({name: $scope.newName, address: $scope.buildAddr($scope.newAddress) })
    $scope.setBookmarks(list)
    if(doClearFields) $scope.clearFields()
  }
  $scope.deleteBookmark = function(index){
    var list = $scope.getBookmarks()
    list.splice(index,1)
    $scope.setBookmarks(list)
  }
  $scope.buildHref = function(index){
    var list = $scope.getBookmarks()
    var gateway = window.location.hostname+':'+window.location.port
    return 'http://'+gateway+$scope.buildAddr(list[index].address)

  }
  $scope.buildAddr = function(s){
    if(s.lastIndexOf('/ipfs/') === 0 || s.lastIndexOf('/ipns/') === 0) return s
    return '/ipfs/'+s
  }
  $scope.bookmarks = []
  $scope.newName = ''
  $scope.newAddress = ''
  $scope.refresh = function(){
    $scope.bookmarks = $scope.getBookmarks()
  }
  $scope.$on('bookmarksChanged',$scope.refresh)
  $scope.refresh()
  $scope.clearFields = function(){
    $scope.newName = ''
    $scope.newAddress = ''
  }
  $scope.clearFields()
}
