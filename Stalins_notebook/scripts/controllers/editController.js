var mainApp = angular.module("mainApp");

mainApp.controller("editController", function ($scope, $http) {
    $scope.edit = '';
    $scope.model = model;

    $scope.editContactForm = function () {
        $scope.edit = '/Edit/EditContactForm';
    }

    $scope.editContact = function (contact, editContactForm) {

        $http.post("/api/Contacts", contact).success(function (data) {
            console.log(data);
            $scope.model.contacts.unshift(data);

        });

        $scope.edit = '';
    }

    $scope.editGroupForm = function () {
        $scope.create = '/Edit/EditGroupForm';
    }

    $scope.editGroup = function (group, editGroupForm) {

        $http.post("/api/Groups", group).success(function (data) {
            console.log(data);
            $scope.model.groups.up(data);
            $scope.showGroup(data);
        });
        $scope.edit = ''
    }


});
