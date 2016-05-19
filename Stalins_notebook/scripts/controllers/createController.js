var mainApp = angular.module("mainApp");

mainApp.controller("createController", function ($scope, $http) {
    $scope.create = '';
    $scope.model = model;

    $scope.createContactForm = function () {
        $scope.create = '/Create/CreateContactForm';
    }

    $scope.createContact = function (contact, addContactForm) {

        $http.post("/api/Contacts", contact).success(function (data) {
            console.log(data);
            $scope.model.contacts.unshift(data);

        });

        $scope.create = '';
    }

    $scope.createGroupForm = function () {
        $scope.create = '/Create/CreateGroupForm';
    }

    $scope.createGroup = function (group, createEditGroupForm) {

        $http.post("/api/Groups", group).success(function (data) {
            console.log(data);
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
