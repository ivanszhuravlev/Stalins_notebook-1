var mainApp = angular.module("mainApp");

mainApp.controller("groupController", function ($scope, $http) {

   

    $scope.model = model;
    $scope.pathgroup = '/ViewGroup/GroupsList';
    // GET GROUP LIST
    $http.get("/api/Groups").success(function (data) {
        $scope.model.groups = data;
    }).error(function (message) {
        console.log("Error " + message);
    });

  
    $scope.path = '';
    $scope.showgroup;
    $scope.showGroup=function()
    {
        $scope.path = '/ViewGroup/Group';
        var id = $scope.model.choosed_groups.pop();
        $http.get("api/Groups" + id).success(function (data) {
            alert("GOOD")
            $scope.showgroup=data;
        });
    }

    $scope.createEditGroupForm = function () {
        $scope.path = '/ViewGroup/CreateEditGroupForm';
    }

    $scope.createEditGroup = function (group, createEditGroupForm) {

        $http.post("/api/Groups", group).success(function (data) {
            console.log(data);
            $scope.model.groups.unshift(data);
            
        });

        $scope.path = '';
    }
   

    $scope.deleteGroups = function () {
        var ids = $scope.model.choosed_groups.sort().reverse(),
            group;
        ids.forEach(function (id, index, ids) {
            deleteGroupsHandler(id);
        });
    };

    function deleteGroupsHandler(id) {
        $http.delete("/api/Groups/" + id + "").success(function (data) {
            var index = $scope.model.groups.indexOf(data);
           
            alert(index);
        });
    };

    $scope.chooseGroup = function (id) {
        var checkbox = document.getElementById("check_" + id),
            checkbox_all = document.getElementById("check_all"),
            groups = document.getElementsByClassName("group"),
            group = document.getElementById("group_" + id),
            action_bar = document.getElementById("groups_actions"),
            checked_exists = false,
            found = false;

        $scope.check_decorate(checkbox, group);

        $scope.add_remove(checkbox, id);

        /**
         * Check if there are checked items in list
         */
        for (var i = 0; i < groups.length; i++) {
            if (groups[i].classList.contains("checked")) {
                checked_exists = true;
                break
            }
        }

        if (!checked_exists) {
            $scope.model.choosed_groups.splice(0, $scope.model.choosed_groups.length);
        }

        /**
         * Check global checkbox if there are some checked items.
         */
        $scope.check_global(checkbox_all, checked_exists);

        /**
         * Show action_bar if there are some checked items.
         */
        $scope.show_action_bar(action_bar, checked_exists);
        alert(id);
    };

    $scope.chooseAll = function () {
        var checkbox = document.getElementById("check_all"),
            groups = document.getElementsByClassName("group"),
            action_bar = document.getElementById("groups_actions"),
            checked_exists = false,
            unchecked_exists = false;

        /**
         * Check if there are checked and unchecked items in list
         */
        for (var i = 0; i < groups.length; i++) {
            if (groups[i].classList.contains("checked")) {
                checked_exists = true;
            } else {
                unchecked_exists = true;
            }
            if (checked_exists && unchecked_exists) {
                break
            }
        }

        /**
         * Uncheck all checkboxes if there are some
         * checked and unchecked ones at the same time
         */
        if (checked_exists && unchecked_exists) {
            for (var i = 0; i < groups.length; i++) {
                var group_checkbox = groups[i].getElementsByClassName("checkbox")[0];

                $scope.model.choosed_groups.splice(0, $scope.model.choosed_groups.length);

                $scope.reset_check(group_checkbox, groups[i]);
            }
        }


        /**
         * Check all items
         */
        for (var i = 0; i < groups.length; i++) {
            var group_checkbox = groups[i].getElementsByClassName("checkbox")[0];

            $scope.model.choosed_groups.push($scope.model.groups[i].Id);

            $scope.check_decorate(group_checkbox, groups[i]);
        }

        checked_exists = false;

        /**
         * Check if there are checked items in list
         */
        for (var i = 0; i < groups.length; i++) {
            if (groups[i].classList.contains("checked")) {
                checked_exists = true;
                break
            }
        }

        if (!checked_exists) {
            $scope.model.choosed_groups.splice(0, $scope.model.choosed_groups.length);
        }

        /**
         * Show action_bar if there are some checked items.
         */
        $scope.show_action_bar(action_bar, checked_exists);

        /**
         * Check global checkbox if there are some checked items.
         */
        $scope.check_global(checkbox, checked_exists);

    };

    $scope.reset_check = function (checkbox, label) {
        label.classList.remove("checked");
        checkbox.classList.remove("checked");
    }

    $scope.check_decorate = function (checkbox, label) {
        label.classList.toggle("checked");
        checkbox.classList.toggle("checked");
    }

    $scope.add_remove = function (checkbox, id) {
        var index = $scope.model.choosed_groups.indexOf(id);

        if (checkbox.classList.contains("checked")) {
            if (index == -1) {
                $scope.model.choosed_groups.push(id);
            }
        } else {
            $scope.model.choosed_groups.splice(index, 1);
        }

    }

    $scope.check_global = function (checkbox_global, checked_exists) {
        if (checked_exists) {
            checkbox_global.classList.add("checked");
        } else {
            checkbox_global.classList.remove("checked");
        }
    }

    $scope.show_action_bar = function (action_bar, checked_exists) {
        if (checked_exists) {
            action_bar.classList.add("shown");
        } else {
            action_bar.classList.remove("shown");
        }
    }

});