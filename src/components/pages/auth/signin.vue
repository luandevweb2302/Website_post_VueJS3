<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-2xl font-bold text-center mb-6">Sign In</h1>
      <div class="text-center mb-4">
        <h3 class="text-lg font-semibold">Login to Your Account</h3>
      </div>
      <form class="signin-form space-y-4" @submit.prevent="handleSignin">
        <div class="form-group">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="formData.email"
            placeholder="Enter your email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="form-group">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            type="password"
            id="password"
            v-model="formData.password"
            placeholder="Enter your password"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          class="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign In
        </button>
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
        const response = await axios.post("http://localhost:5000/login", {
          email: this.formData.email,
          password: this.formData.password,
        });

        const { user, token } = response.data;

        if (user && token) {
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", token);

          alert(`Welcome back, ${user.username}!`);

          this.$router.push(user.role === "admin" ? "/admin" : "/");
        }
      } catch (error) {
        console.error("Error during sign in:", error);
        alert("Invalid email or password!");
      }
    },
  },
};
</script>
