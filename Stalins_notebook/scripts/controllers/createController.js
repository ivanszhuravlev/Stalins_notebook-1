var mainApp = angular.module("mainApp");

mainApp.controller("createController", function ($scope, $http) {
    $scope.create = '';
    $scope.model = model;

    $scope.createContactForm = function () {
        $scope.create = '/Main/AddContactForm';
    }

    $scope.createContact = function (contact, addContactForm) {

        $http.post("/api/Contacts", contact).success(function (data) {
            console.log(data);
            $scope.model.contacts.unshift(data);

        });

        $scope.create = '';
    }

    $scope.createGroupForm = function () {
        $scope.create = '/ViewGroup/CreateEditGroupForm';
    }

    $scope.createGroup = function (group, createEditGroupForm) {

        $http.post("/api/Groups", group).success(function (data) {
            console.log(data);
            $scope.model.groups.unshift(data);
            $scope.showGroup(data);
        });
        $scope.create = ''
    }
    
 
});
