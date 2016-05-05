var Index = {
    enter_button: "",
    password_field: "",
    submit_button: "",

    init: function () {
        this.enter_button = document.getElementById("enter_button");
        this.submit_button = document.getElementById("submit");
        this.password_field = document.getElementById("password");

        this.enter_button.addEventListener("click", Index.formOpen, false);
        this.submit_button.addEventListener("click", Index.redirect, false);
    },

    formOpen : function() {
        document.getElementById("layer_1").classList.add("closed");
    },

    redirect: function () {
        if (Index.password_field.value) {
            window.location.href = "/Main/Main";
        } else {
            console.log("Ошибка, пустой пароль");
        }
    }
}
