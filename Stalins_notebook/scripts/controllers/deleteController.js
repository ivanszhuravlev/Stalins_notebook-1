var mainApp = angular.module("mainApp");

mainApp.controller("deleteController", function ($rootScope, $scope, $http) {

    $scope.model = model;
    $scope.deleteItems = function () {
        var ids = $scope.model.choosed_items.sort().reverse(),
            item;
        ids.forEach(function (id, index, ids) {
            deleteItemsHandler(id);
        });
    };

    function deleteItemsHandler(id) {
        flagtype = $scope.model.flag == "flagContact" ? "Contacts" : "Groups";
        if (flagtype == "Contacts") {
            for (var i = 0; i < $scope.model.contacts.length; i++) {
                var key = $scope.model.contacts[i];
                if (key.ContactId == id) {
                    $scope.model.contacts.splice(i, 1);
                    break;
                }

            }
            for (var i = 0; i < $scope.model.members.length; i++) { /////////////////////////
                var key = $scope.model.members[i];
                if (key.ContactId == id) {
                    $scope.model.members.splice(i, 1);
                    break;
                }

            }
        } else
        {
            for (var i = 0; i < $scope.model.groups.length; i++) {
                var key = $scope.model.groups[i];
                if (key.GroupId == id) {
                    $scope.model.groups.splice(i, 1);
                    break;
                }
            }
        }
        
        $http.delete("/api/" + flagtype + "/" + id + "").success(function (data) {
            
            alert("Удалено");

        });
    };
    $scope.deleteMembers = function () {
        
        var ids = $scope.model.choosed_members.sort().reverse(),
            member;
        ids.forEach(function (id, index, ids) {
            deleteMembersHandler(id);alert("Удадение участника"+id);
        });
    };

    function deleteMembersHandler(idcurrentMember, idGroup) {
        var pair =
            {
                idgroup: idGroup,
                idcontact: idcurrentMember
            };
        $http.delete("/api/MembersGroups",pair).success(function (data) {
            alert("deleted "+data);
            alert("Удалено");
        });
    };

 
});