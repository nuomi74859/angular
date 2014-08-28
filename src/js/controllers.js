/**
 * Created by Administrator on 2014/8/27.
 */
var myAngularCtrls = angular.module('MyAngularCtrls', []);

myAngularCtrls.controller('HelloCtrl', ['$scope',
    function ($scope) {
        $scope.greeting = {
            text: 'Hello'
        }
    }
]);

myAngularCtrls.controller('BookListCtrl', ['$scope',
    function ($scope) {
        $scope.books = [
            {title: '呵呵', author: 'nuomi'},
            {title: '哈哈', author: 'nuomi'}
        ]
    }
]);

myAngularCtrls.controller('UserInfoCtrl',['$scope', function($scope){
    $scope.userInfo = {
        email:'123132121@qq.com',
        password:'9876543219',
        autoLogin:true
    };

    $scope.getFormData = function(){
        console.log($scope.userInfo);
    };

    $scope.setFormData = function(){
        $scope.userInfo = {
            email:'121313@11.com',
            password:'1231313',
            autoLogin:false
        }
    };

    $scope.resetForm = function(){
        $scope.userInfo = {
            email:'123132121@qq.com',
            password:'9876543219',
            autoLogin:true
        };
    }
}]);

myAngularCtrls.controller('CSSCtrl',['$scope',function($scope){
    $scope.color = 'red';
    $scope.setGreen = function(){
        $scope.color = 'green';
    }
}]);