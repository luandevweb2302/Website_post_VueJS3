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
    handleSignin() {
      // Placeholder logic for signin action
      alert(`Sign in successful for ${this.formData.email}`);
      console.log(this.formData);
    },
  },
};
</script>
