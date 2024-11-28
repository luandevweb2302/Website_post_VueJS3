<template>
  <div class="signin-page">
    <h1>Sign In Page</h1>
    <div class="signin-container">
      <h3>Login to Your Account</h3>
      <form class="signin-form" @submit.prevent="handleSignin">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="formData.password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" class="signin-button">Sign In</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async handleSignin() {
      try {
        const response = await axios.get("http://localhost:3000/users", {
          params: { email: this.formData.email },
        });
        const user = response.data.find(
          (user) => user.password === this.formData.password
        );
        if (user) {
          alert(`Welcome back, ${user.username}!`);
          this.$router.push("/");
        } else {
          alert("Invalid email or password.");
        }
      } catch (error) {
        console.error("Error during sign in:", error);
        alert("Failed to sign in!");
      }
    },
  },
};
</script>
