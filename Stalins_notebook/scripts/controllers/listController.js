var mainApp = angular.module("mainApp");

mainApp.controller("listController", function ($scope, $http) {
    $scope.model = model;
    $scope.path = '/Main/ContactsList';

    $http.get("/api/Contacts").success(function (data) {
        $scope.model.contacts = data.reverse();
    }).error(function (message) {
        console.log("Error " + message);
    });

    $scope.deleteContacts = function () {
        var ids = $scope.model.choosed_contacts.sort().reverse(),
            contact;
        ids.forEach(function (id, index, ids) {
            deleteContactsHandler(id);
        });
    };

    function deleteContactsHandler(id) {
        $http.delete("/api/Contacts/" + id + "").success(function (data) {
            var index = $scope.model.contacts.indexOf(data);
            alert(index);
        });
    };

    $scope.chooseCont = function (id) {
        var checkbox       = document.getElementById("check_" + id),
            checkbox_all   = document.getElementById("check_all"),
            contacts       = document.getElementsByClassName("contact"),
            contact        = document.getElementById("cont_" + id),
            action_bar     = document.getElementById("contacts_actions"),
            checked_exists = false,
            found = false;

        $scope.check_decorate(checkbox, contact);

        $scope.add_remove(checkbox, id);

        /**
         * Check if there are checked items in list
         */
        for (var i = 0; i < contacts.length; i++) {
            if (contacts[i].classList.contains("checked")) {
                checked_exists = true;
                break
            }
        }

        if (!checked_exists) {
            $scope.model.choosed_contacts.splice(0, $scope.model.choosed_contacts.length);
        }

        /**
         * Check global checkbox if there are some checked items.
         */
        $scope.check_global(checkbox_all, checked_exists);

        /**
         * Show action_bar if there are some checked items.
         */
        $scope.show_action_bar(action_bar, checked_exists);
    };

    $scope.chooseAll = function () {
        var checkbox         = document.getElementById("check_all"),
            contacts         = document.getElementsByClassName("contact"),
            action_bar       = document.getElementById("contacts_actions"),
            checked_exists   = false,
            unchecked_exists = false;

        /**
         * Check if there are checked and unchecked items in list
         */
        for (var i = 0; i < contacts.length; i++) {
            if (contacts[i].classList.contains("checked")) {
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
            for (var i = 0; i < contacts.length; i++) {
                var cont_checkbox = contacts[i].getElementsByClassName("checkbox")[0];

                $scope.model.choosed_contacts.splice(0, $scope.model.choosed_contacts.length);

                $scope.reset_check(cont_checkbox, contacts[i]);
            }
        }


        /**
         * Check all items
         */
        for (var i = 0; i < contacts.length; i++) {
            var cont_checkbox = contacts[i].getElementsByClassName("checkbox")[0];

            $scope.model.choosed_contacts.push($scope.model.contacts[i].Id);
            
            $scope.check_decorate(cont_checkbox, contacts[i]);
        }

        checked_exists = false;

        /**
         * Check if there are checked items in list
         */
        for (var i = 0; i < contacts.length; i++) {
            if (contacts[i].classList.contains("checked")) {
                checked_exists = true;
                break
            }
        }

        if (!checked_exists) {
            $scope.model.choosed_contacts.splice(0, $scope.model.choosed_contacts.length);
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
        var index = $scope.model.choosed_contacts.indexOf(id);

        if (checkbox.classList.contains("checked")) {
            if (index == -1) {
                $scope.model.choosed_contacts.push(id);
            }
        } else {
            $scope.model.choosed_contacts.splice(index, 1);
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

    /*-------------------------------------------------------*/

    $scope.call = function () {
        alert("hi");
        Skype.ui({
            name: "call",
            element: "SkypeButton_Call_#selisej198_1",
            participants: ["selisej198"],
            video: false
        });
    }
});