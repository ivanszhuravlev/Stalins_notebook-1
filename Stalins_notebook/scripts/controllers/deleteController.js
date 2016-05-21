var mainApp = angular.module("mainApp");

mainApp.controller("deleteController", function ($rootScope, $scope, $http) {

    $scope.model = model;
    $scope.deleteitems = function () {
        var ids = $scope.model.choosed_items.sort().reverse(),
            item;
        ids.forEach(function (id, index, ids) {
            deleteitemsHandler(id);
        });
    };

    function deleteitemsHandler(id) {
        flagtype = $scope.model.flag == "flagContact" ? "Contacts" : "Groups";
        $http.delete("/api/" + flagtype + "/" + id + "").success(function (data) {
            var index = $scope.model.flag == "flagContact" ? $scope.model.contacts.indexOf(data) : $scope.model.groups.indexOf(data);
            alert(flagtype);

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
                MemberId: idcurrentMember,
                GroupId: idGroup
            };
        $http.delete("/api/MembersGroups",pair).success(function (data) {
            alert("deleted "+data);

        });
    };

 
});