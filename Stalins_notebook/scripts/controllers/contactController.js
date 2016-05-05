var mainApp = angular.module("mainApp");

mainApp.controller("contactController", function ($scope, $http) {
    $scope.path = '';
    $scope.model = model;

    $scope.addContactForm = function () {
        $scope.path = '/Main/AddContactForm';
    }

    $scope.addContact = function (contact, addContactForm) {

        $http.post("/api/Contacts", contact).success(function (data) {
            console.log(data);
            $scope.model.contacts.unshift(data);
        });

        $scope.path = '';
    }
});