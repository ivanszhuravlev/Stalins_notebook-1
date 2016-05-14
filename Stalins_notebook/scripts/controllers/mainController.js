var mainApp = angular.module("mainApp");

mainApp.controller("mainController", function ($scope, $http) {
    $scope.model = model;
    $scope.list_type = '/ViewGroup/ActionBarGroup';
    $scope.change_list= function (type)
    {
        if(type=='contacts')
        {
            $scope.list_type = '/Main/ActionBarContact';
        }
        else
        {
            $scope.list_type = '/ViewGroup/ActionBarGroup';
        }
        console.log($scope.list_type);
    }
})
