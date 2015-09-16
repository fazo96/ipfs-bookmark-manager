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
  $scope.addBookmark = function(){
    var list = $scope.getBookmarks()
    list.push({name: $scope.newName, address: $scope.newAddress})
    $scope.setBookmarks(list)
  }
  $scope.deleteBookmark = function(index){
    var list = $scope.getBookmarks()
    list.splice(index,1)
    $scope.setBookmarks(list)
  }
  $scope.buildHref = function(index){
    var list = $scope.getBookmarks()
    var addr = list[index].address
    var gateway = window.location.hostname+':'+window.location.port
    console.log(gateway,addr)
    return 'http://'+gateway+'/ipfs/'+addr
  }
  $scope.bookmarks = []
  $scope.newName = ''
  $scope.newAddress = ''
  $scope.refresh = function(){
    $scope.bookmarks = $scope.getBookmarks()
  }
  $scope.$on('bookmarksChanged',$scope.refresh)
  $scope.refresh()
}
