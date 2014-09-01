/**
 * Created by Administrator on 2014/8/27.
 */
var myAngularApp = angular.module('MyAngularApp', [
    'ngRoute', 'ngAnimate', 'MyAngularCtrls'
]);

myAngularApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/form.html',
            controller: 'UserInfoCtrl'
        })
        .when('/css1',{
            templateUrl:'templates/css1.html',
            controller:'CSSCtrl'
        })
        .when('/css2',{
            templateUrl:'templates/css2.html',
            controller:'CSSCtrl2'
        })
        .when('/css3',{
            templateUrl:'templates/css3.html',
            controller:'CSSCtrl3'
        })
        .when('/hello', {
            templateUrl: 'templates/hello.html',
            controller: 'HelloCtrl'
        }).when('/list', {
            templateUrl: 'templates/booklist.html',
            controller: 'BookListCtrl'
        }).otherwise({
            redirectTo: '/'
        })
});
