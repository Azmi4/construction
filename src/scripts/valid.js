import Vue from "vue";

new Vue({
  el: ".overlay",
  data: {
    name: "",
    email: "",
    tel: "",
    nameValid: true,
    emailValid: true,
    telValid: true,
    nameError: "",
    emailError: "",
    telError: ""
  },
  methods: {
    validateName() {
      this.name = this.$el.querySelector(".overlay__form-input-name").value;
      if (this.name.length < 3) {
        this.nameValid = false;
        this.nameError = "Слишком короткое имя";
      } else {
        this.nameValid = true;
        this.nameError = "";
      }
      return this.nameValid;
    },
    validateEmail() {
      var reqex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.email = this.$el.querySelector(".overlay__form-input-email").value;
      if (this.email.length < 8) {
        this.emailValid = false;
        this.emailError = "Короткий email";
      } else if (!reqex.test(this.email)) {
        this.emailValid = false;
        this.emailError = "неверный email";
      } else {
        this.emailValid = true;
        this.emailError = "";
      }
      return this.emailValid;
    },
    validateTel() {
      this.tel = this.$el.querySelector(".overlay__form-input-tel").value;
      if (this.tel.length < 11) {
        this.telValid = false;
        this.telError = "Слишком короткий номер";
      } else {
        this.telValid = true;
        this.telError = "";
      }
      return this.telValid;
    }
  }
});
