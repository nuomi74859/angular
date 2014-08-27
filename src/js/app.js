/**
 * Created by Administrator on 2014/8/27.
 */
var bookStoreApp = angular.module('bookStoreApp', [
    'ngRoute', 'bookStoreCtrls'
]);

bookStoreApp.config(function ($routeProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'templates/hello.html',
        controller: 'HelloCtrl'
    }).when('/list', {
        templateUrl: 'templates/booklist.html',
        controller: 'BookListCtrl'
    }).otherwise({
        redirectTo: '/hello'
    })
});
