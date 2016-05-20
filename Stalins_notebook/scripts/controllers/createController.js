﻿var mainApp = angular.module("mainApp");

mainApp.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|tel|skype):/);
}]);

mainApp.controller("createController", function ($scope, $http) {
    $scope.create = '';
    $scope.model = model;

    $scope.createContactForm = function () {
        $scope.create = '/Create/CreateContactForm';
    }

    $scope.createContact = function (contact, addContactForm) {
        var phone_format = /\+7\d{3}-\d{3}-\d{2}-\d{2}/;

        if (phone_format.exec(contact.Telephone1)) {
            contact.Telephone1 = contact.Telephone1.replace(/-/g, "");
            $http.post("/api/Contacts", contact).success(function (data) {
                $scope.model.contacts.unshift(data);
            });
        } else {
            alert("fail");
        }

        $scope.create = '';
    }

    $scope.createGroupForm = function () {
        $scope.create = '/Create/CreateGroupForm';
    }

    $scope.createGroup = function (group, createEditGroupForm) {

        $http.post("/api/Groups", group).success(function (data) {
            $scope.model.groups.unshift(data);
        });
        $scope.create = ''
    }


    $scope.createMembers = function () {
        var idsMember = $scope.model.choosed_items;
        var idGroup = $scope.model.currentitem.GroupId;
        idsMember.forEach(function (idcurrentMember, index, idsMember) {
            createMembersHandler(idcurrentMember, idGroup);
        });
    };

    function createMembersHandler(idcurrentMember, idGroup) {
        alert(idGroup + " " + idcurrentMember);
        var membergroup =
            {
                MemberId: idcurrentMember,
                GroupId: idGroup
            };
        $http.post("/api/MembersGroups/", membergroup).success(function (data) {
            console.log(data);
            $scope.model.members.unshift(data);
            alert("good");
        });
    };

 
});
