var mainApp = angular.module("mainApp");

mainApp.controller("editController", function ($scope, $http) {
    $scope.create_edit = '';
    $scope.model = model;
   // $scope.show=''

    $scope.editContactForm = function () {
        $scope.show = '';
        $scope.create_edit = '/Edit/EditContactForm';
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
        $scope.create_edit = '';
    }

    $scope.editGroupForm = function () {
        $scope.show = '';
        $scope.create = '/Edit/EditGroupForm';
    }

    $scope.editGroup = function (group, editGroupForm) {

        $http.post("/api/Groups/"+group.GroupId, group).success(function (data) {
           // console.log(data);
            //$scope.model.groups.up(data);
            $scope.showGroup(data);
        });
        $scope.notdataedit.visible = true;
        $scope.create_edit = ''
    }

    


});
