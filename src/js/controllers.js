/**
 * Created by Administrator on 2014/8/27.
 */
var bookStoreCtrls = angular.module('bookStoreCtrls', []);

bookStoreCtrls.controller('HelloCtrl', ['$scope',
    function ($scope) {
        $scope.greeting = {
            text: 'Hello'
        }
    }
]);

bookStoreCtrls.controller('BookListCtrl', ['$scope',
    function ($scope) {
        $scope.books = [
            {title: '呵呵', author: 'nuomi'},
            {title: '哈哈', author: 'nuomi'}
        ]
    }
]);