/**
 * Created by Administrator on 2014/8/20.
 */
define(function(require){
    require('angular');
    var myModule = angular.module("MyModule",[]);
    myModule.directive('hello',function(){
        return {
            restrict:'E',
            template:'<div>123</div>',
            replace:true
        }
    });
});
//function HelloAngular($scope) {
//    $scope.greeting = {
//        text:'hello'
//    }
//}
