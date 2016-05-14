var mainApp = angular.module("mainApp");

mainApp.controller("contactController", function ($scope, $http) {
    $scope.path = '';
    $scope.model = model;

    $scope.addContactForm = function () {
        $scope.path = '/Main/AddContactForm';
    }

    $scope.addContact = function (contact, addContactForm) {
        var phone_format = /\+7\d{3}-\d{3}-\d{2}-\d{2}/;

        if (phone_format.exec(contact.Telephone1)) {
            contact.Telephone1 = contact.Telephone1.replace(/-/g, "");

            alert(contact.Telephone1);

            $http.post("/api/Contacts", contact).success(function (data) {
                console.log(data);
                $scope.model.contacts.unshift(data);
            });
        } else {
            alert("fail");
        }

        $scope.path = '';
    }
});
