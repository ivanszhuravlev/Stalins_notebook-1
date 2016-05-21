var mainApp = angular.module("mainApp");

mainApp.controller("editController", function ($rootScope, $scope, $http) {
    
    $scope.model = model;

    $scope.editContactForm = function () {
        $rootScope.show = '/Edit/EditContactForm';
    }

    $scope.editContact = function (contact, editContactForm) {
        var phone_format = /\+7\d{3}-\d{3}-\d{2}-\d{2}/;

        if (phone_format.exec(contact.Telephone1)) {
            contact.Telephone1 = contact.Telephone1.replace(/-/g, "");
            $http.put("/api/Contacts/" + contact.ContactId, contact).success(function (data) {
            });
        } else {
            alert("fail");
        }
        $scope.notdataedit.visible = true;
        $rootScope.show = '';
    }

    $scope.editGroupForm = function () {
        $rootScope.show = '/Edit/EditGroupForm';
    }

    $scope.editGroup = function (group, editGroupForm) {

        $http.post("/api/Groups/"+group.GroupId, group).success(function (data) {
           // console.log(data);
            //$scope.model.groups.up(data);
            $scope.showGroup(data);
        });
        $scope.notdataedit.visible = true;
        $rootScope.show = ''
    }

    


});
