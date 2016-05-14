var mainApp = angular.module("mainApp");

mainApp.controller("listController", function ($scope, $http) {
    $scope.model = model;
    $scope.path = '/Main/ContactsList';
    $scope.list_type = '/Main/ActionBarContact';

    $scope.changeList = function (type) {
        if (type == 'contacts') {
            $scope.list_type = '/Main/ActionBarContact';
            $scope.path = '/Main/ContactsList';
        }
        else {
            $scope.list_type = '/ViewGroup/ActionBarGroup';
            $scope.path = '/ViewGroup/GroupsList';
        }
        console.log($scope.list_type);
    }

    $http.get("/api/Groups").success(function (data) {
        $scope.model.groups = data;

    }).error(function (message) {
        console.log("Error " + message);
    });

    $http.get("/api/Contacts").success(function (data) {
        $scope.model.contacts = data;
    }).error(function (message) {
        console.log("Error " + message);
    });



    $scope.deleteitems = function () {
        var ids = $scope.model.choosed_items.sort().reverse(),
            item;
        ids.forEach(function (id, index, ids) {
            deleteitemsHandler(id);
        });
    };

    function deleteitemsHandler(id) {
        $http.delete("/api/items/" + id + "").success(function (data) {
            var index = $scope.model.items.indexOf(data);
            
        });
    };

    //add to group
   /* $scope.addMembers = function () {
        var ids=[]
        for (var i = 0; i < $scope.model.choosed_items.length; i++) {
            ids[i]=$scope.model.choosed_items[i].itemId;
        }
       
        
    addMembersHandler(ids);
      
    };

    function addMembersHandler(ids) {
        $http.post("/api/Groups/" + JSON.stringify(ids) + "").success(function (data) {
            var index = $scope.model.items.indexOf(data);
            alert(index);
        });
    };*/
    //-------------//

    $scope.chooseItem = function (id) {
        var checkbox       = document.getElementById("check_" + id),
            checkbox_all   = document.getElementById("check_all"),
            items       = document.getElementsByClassName("item"),
            item        = document.getElementById("item_" + id),
            action_bar     = document.getElementById("items_actions"),
            checked_exists = false,
            found = false;

        $scope.check_decorate(checkbox, item);

        $scope.add_remove(checkbox, id);

        /**
         * Check if there are checked items in list
         */
        for (var i = 0; i < items.length; i++) {
            if (items[i].classList.contains("checked")) {
                checked_exists = true;
                break
            }
        }

        if (!checked_exists) {
            $scope.model.choosed_items.splice(0, $scope.model.choosed_items.length);
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
        var checkbox         = document.getElementById("check_all"),
            items         = document.getElementsByClassName("item"),
            action_bar       = document.getElementById("items_actions"),
            checked_exists   = false,
            unchecked_exists = false;

        /**
         * Check if there are checked and unchecked items in list
         */
        for (var i = 0; i < items.length; i++) {
            if (items[i].classList.contains("checked")) {
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
            for (var i = 0; i < items.length; i++) {
                var item_checkbox = items[i].getElementsByClassName("checkbox")[0];

                $scope.model.choosed_items.splice(0, $scope.model.choosed_items.length);

                $scope.reset_check(item_checkbox, items[i]);
            }
        }


        /**
         * Check all items
         */
        for (var i = 0; i < items.length; i++) {
            var item_checkbox = items[i].getElementsByClassName("checkbox")[0];

            $scope.model.choosed_items.push($scope.model.items[i].Id);
            
            $scope.check_decorate(item_checkbox, items[i]);
        }

        checked_exists = false;

        /**
         * Check if there are checked items in list
         */
        for (var i = 0; i < items.length; i++) {
            if (items[i].classList.contains("checked")) {
                checked_exists = true;
                break
            }
        }

        if (!checked_exists) {
            $scope.model.choosed_items.splice(0, $scope.model.choosed_items.length);
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
        var index = $scope.model.choosed_items.indexOf(id);

        if (checkbox.classList.contains("checked")) {
            if (index == -1) {
                $scope.model.choosed_items.push(id);
            }
        } else {
            $scope.model.choosed_items.splice(index, 1);
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