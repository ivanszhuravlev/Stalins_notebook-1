var mainApp = angular.module("mainApp");

mainApp.controller("membersgroupController", function ($scope, $http) {
    $scope.model = model;
    $scope.pathcurrentgroups = ''
    $scope.showMembers = function (idNowGroup) {
        $scope.pathcurrentgroups = '/ViewMembersGroup/InfoMarkersGroup'
        alert("Мы отправляем на сервер значение  " + idNowGroup);
        alert("PRIVET  " + idNowGroup);
        $http.post("/api/",idNowGroup).success(function (data) {
            $scope.model.infomarkersgroup = data;
            alert("HELLO FROM GET ");
        }).error(function (message) {
            console.log("Error " + message);
            alert("Error FROM GET ");
        });
    };
   /* $scope.addMembers = function ()
    {
        var ids= [];
        ids.push($scope.model.choosed_groups);
        ids.push($scope.model.choosed_contacts);
        alert(ids[0]);
        $http.post("/api/MembersGroup", ids).success(function (data)
        {
            console.log(data);
        })
    }*/

    $scope.addMembers = function () {
        var idsMember = $scope.model.choosed_contacts;
        var idGroup = $scope.model.choosed_groups;
        idsMember.forEach(function (idcurrentMember, index, idsMember) {
            addMembersHandler(idcurrentMember,idGroup[0]);
        });
    };

    function addMembersHandler(idcurrentMember, idGroup) {
        alert(idGroup+" "+idcurrentMember);
        var membergroup =
            {
                MemberId: idcurrentMember,
                GroupId: idGroup
            };
        $http.post("/api/MembersGroup/",membergroup).success(function () {
           
            alert("good");
        });
    };

    $scope.path


});