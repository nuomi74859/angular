/*! angular 03-09-2014 */
var myAngularApp=angular.module("MyAngularApp",["ui.router","ngAnimate","MyAngularCtrls"]);myAngularApp.config(function($stateProvider,$urlRouterProvider){$urlRouterProvider.otherwise("/index"),$stateProvider.state("index",{url:"/index",views:{"":{templateUrl:"tpls/index.html"},"topbar@index":{templateUrl:"tpls/topbar.html"},"main@index":{templateUrl:"tpls/home.html"}}}).state("index.usermng",{url:"/usermng",views:{"main@index":{templateUrl:"tpls/usermng.html"}}})});