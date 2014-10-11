/**
 * Created by Administrator on 2014/8/27.
 */
var myAngularCtrls = angular.module('MyAngularCtrls', []);


myAngularCtrls.controller('tpls',['$scope','$state','greeting',
    function($scope,$state,greeting){
        $scope.text = greeting;
        console.log($state);

        $scope.$on('$viewContentLoading',
            function(event, viewConfig){
                alert('start');
            }
        );
//        $scope.$on('$viewContentLoaded',
//            function(event, viewConfig){
//                alert('end')
//            }
//        );
    }
]);




//myAngularCtrls.controller('HelloCtrl', ['$scope',
//    function ($scope) {
//        $scope.greeting = {
//            text: 'Hello'
//        };
//        $scope.page = 'hello';
//    }
//]);

//myAngularCtrls.controller('BookListCtrl', ['$scope',
//    function ($scope) {
//        $scope.books = [
//            {title: '呵呵', author: 'nuomi'},
//            {title: '哈哈', author: 'nuomi'}
//        ];
//        $scope.page = 'book';
//    }
//]);
//
//myAngularCtrls.controller('UserInfoCtrl',['$scope', function($scope){
//    $scope.userInfo = {
//        email:'123132121@qq.com',
//        password:'9876543219',
//        autoLogin:true
//    };
//
//    $scope.getFormData = function(){
//        console.log($scope.userInfo);
//    };
//
//    $scope.setFormData = function(){
//        $scope.userInfo = {
//            email:'121313@11.com',
//            password:'1231313',
//            autoLogin:false
//        }
//    };
//
//    $scope.resetForm = function(){
//        $scope.userInfo = {
//            email:'123132121@qq.com',
//            password:'9876543219',
//            autoLogin:true
//        };
//    }
//}]);
//
//myAngularCtrls.controller('CSSCtrl',['$scope',function($scope){
//    $scope.color = 'red';
//    $scope.setGreen = function(){
//        $scope.color = 'green';
//    }
//}]);
//
//myAngularCtrls.controller('CSSCtrl2',['$scope',function($scope){
//    $scope.messageText = '123';
//    $scope.isError = false;
//    $scope.isWarning = false;
//    $scope.showError = function(){
//        $scope.isError = true;
//        $scope.isWarning= false;
//        $scope.messageText = 'error';
//    };
//    $scope.showWarning = function(){
//        $scope.isWarning = true;
//        $scope.isError= false;
//        $scope.messageText = 'warning';
//    }
//}]);
//
//myAngularCtrls.controller('CSSCtrl3',['$scope',function($scope){
//    $scope.menuState = {show:false};
//    $scope.toggleMenu = function(){
//        $scope.menuState.show = !$scope.menuState.show;
//    }
//}]);