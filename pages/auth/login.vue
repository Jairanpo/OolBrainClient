<template>
  <b-container class="mt-5">
    <h1>Login:</h1>
    <b-form>
      <b-form-input
        class="col-md-6 col-centered"
        v-model="email"
        type="email"
        required
        placeholder="Enter email"
      ></b-form-input>
      <b-form-input
        class="col-md-6 col-centered"
        v-model="pass_1"
        type="password"
        required
        placeholder="Type your password"
      ></b-form-input>
      <b-form-input
        class="col-md-6 col-centered"
        v-model="pass_2"
        type="password"
        v-on:change
        required
        placeholder="Confirm your password"
      ></b-form-input>
    </b-form>
    <div class="col-md-6 col-centered" v-show="passwords_show">
      <div class="text-danger" v-if="!passwords_match">
        <div>{{passwords_status_message}}</div>
      </div>
      <div class="text-success" v-else>
        <div>{{passwords_status_message}}</div>
      </div>
    </div>
    <b-button class="col-md-6 col-centered">Submit</b-button>
    <pre>
        email: {{email}}
        pass_1: {{pass_1}}
        pass_2: {{pass_2}}
        password_show: {{passwords_show}}
        passwords_match: {{passwords_match}}
        passwords_status_message: {{passwords_status_message}}
    </pre>
  </b-container>
</template>

<script>
export default {
  data: function data() {
    return {
      email: "",
      pass_1: "",
      pass_2: "",
      passwords_show: false,
      passwords_match: false,
      password_status_message: ""
    };
  },
  watch: {
    pass_1: function pass_1() {
      this.passwords_update();
    },
    pass_2: function pass_2() {
      this.passwords_update();
    }
  },
  methods: {
    passwords_update: function on_update() {
      if (this.pass_1 === "" || this.pass_2 === "") {
        this.passwords_show = true;
        this.passwords_status_message = "Please provide both passwords";
      } else if (this.pass_1 === this.pass_2) {
        this.passwords_status_message = "Passwords match";
        this.passwords_match = true;
      } else {
        this.passwords_status_message = "Passwords do not match";
        this.passwords_match = false;
      }
    }
  }
};
</script>