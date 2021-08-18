<template>
  <div class="register">
    <div>
      <form @submit.prevent="register">
        <h2>Register</h2>
        <input type="email" placeholder="Email address..." v-model="email" />

        <input
          :type="passwordType"
          placeholder="password..."
          v-model="password"
        />

        <img
          class="imgEye"
          src="data:image/png;base64,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"
          alt="icon show"
          @click="passwordTypeValue()"
        />

        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      passwordType: "password",
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Successfully registered! Please login.");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    },

    passwordTypeValue() {
      if (this.password) {
        this.passwordType =
          this.passwordType == "password" ? "text" : "password";
      }
    },
  },
};
</script>

<style scoped>
.imgEye {
  width: 1.2rem;
  vertical-align: middle;
  position: relative;
  right: 2.9rem;
  cursor: pointer;
}
</style>
