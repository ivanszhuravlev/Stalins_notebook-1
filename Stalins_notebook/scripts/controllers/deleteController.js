var mainApp = angular.module("mainApp");

mainApp.controller("deleteController", function ($scope, $http) {

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
        
       

        $http.delete("/api/" + flagtype + "/" + id + "").success(function (data) {
            var index = $scope.model.flag == "flagContact" ? $scope.model.contacts.indexOf(data) : $scope.model.groups.indexOf(data);
           $scope.model.flag == "flagContact" ? $scope.model.contacts.splice(index, 1) : $scope.model.groups.splice(index, 1);
            var tag = document.getElementById("item_" + id);
            tag.remove();
            alert(flagtype+" "+index);

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