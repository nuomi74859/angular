/**
 * Created by Administrator on 2014/8/27.
 */
var myAngularApp = angular.module('MyAngularApp', [
    'ngRoute', 'MyAngularCtrls'
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
