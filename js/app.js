/*! angular 11-10-2014 */
var myAngularApp=angular.module("MyAngularApp",["ui.router","MyAngularCtrls"]);myAngularApp.config(function($stateProvider,$urlRouterProvider){$urlRouterProvider.otherwise("/index"),$stateProvider.state("index",{url:"/index",views:{"":{templateUrl:"tpls/index.html"},"topbar@index":{templateUrl:"tpls/topbar.html",controller:function($scope,$stateParams){$scope.index="halo",$scope.$on("$stateChangeStart",function(){console.log("$stateChangeStart")}),$scope.$on("$stateChangeSuccess",function(){console.log("$stateChangeSuccess")}),$scope.$on("$stateChangeError",function(){console.log("$stateChangeError")}),console.log($stateParams)}},"main@index":{templateUrl:"tpls/home.html"}}}).state("index.usermng",{url:"/usermng",resolve:{currentData:function($http){return $http.get("/testData.json")},greeting:function($q,$timeout){var deferred=$q.defer();return $timeout(function(){deferred.resolve("hello")},1e3),deferred.promise}},views:{"main@index":{templateUrl:"tpls/usermng.html",controller:function($scope,$state,$stateParams,greeting){$scope.text=greeting,console.log($state),console.log($stateParams)}}},onEnter:function(){console.log("onEnter")},onExit:function(){console.log("onExit")}})});