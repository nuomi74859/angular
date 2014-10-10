/**
 * Created by Administrator on 2014/8/27.
 */
var myAngularApp = angular.module('MyAngularApp', [
    'ui.router','MyAngularCtrls'
]);

//myAngularApp.config(function ($routeProvider) {
//    $routeProvider
//        .when('/', {
//            templateUrl: 'templates/form.html',
//            controller: 'UserInfoCtrl'
//        })
//        .when('/css1',{
//            templateUrl:'templates/css1.html',
//            controller:'CSSCtrl'
//        })
//        .when('/css2',{
//            templateUrl:'templates/css2.html',
//            controller:'CSSCtrl2'
//        })
//        .when('/css3',{
//            templateUrl:'templates/css3.html',
//            controller:'CSSCtrl3'
//        })
//        .when('/hello', {
//            templateUrl: 'templates/hello.html',
//            controller: 'HelloCtrl'
//        }).when('/list', {
//            templateUrl: 'templates/booklist.html',
//            controller: 'BookListCtrl'
//        }).otherwise({
//            redirectTo: '/'
//        })
//});
myAngularApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url:'/index',
            views: {
                '': {
                    templateUrl:'tpls/index.html'
                },
                'topbar@index':{
                    templateUrl:'tpls/topbar.html'
                },
                'main@index':{
                    templateUrl:'tpls/home.html'
                }
            }
        })
        .state('index.usermng', {
            url:'/usermng',
            resolve:{
                currentData:function($http){
                    return $http.get('/testData.json');
                }
            },
            views: {
                'main@index':{
                    templateUrl:'tpls/usermng.html',
                    controller:function($scope,$state,currentData){
                        $scope.text = currentData.data;
//                        console.log(currentData);
                    }
                }
            },
            onEnter:function(currentData){
                alert('我在渲染之前拿到了数据'+currentData.data);
            },
            onExit:function(){
                alert('离开？！')
            }
        });
});
