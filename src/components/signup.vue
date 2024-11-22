<template>
  <div class="signup-page">
    <h1>Signup Page</h1>
    <div class="signup-container">
      <h3>Create an Account</h3>
      <form class="signup-form" @submit.prevent="handleSignup">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="formData.username"
            placeholder="Enter your username"
            required
          />
        </div>
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
        <button type="submit" class="signup-button">Signup</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    handleSignup() {
      // Placeholder logic for signup action
      alert(`Signup successful for ${this.formData.username}`);
      console.log(this.formData);
    },
  },
};
</script>
