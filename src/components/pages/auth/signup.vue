<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-2xl font-bold text-center mb-6">Sign Up</h1>
      <div class="text-center mb-4">
        <h3 class="text-lg font-semibold">Create an Account</h3>
      </div>
      <form class="signup-form space-y-4" @submit.prevent="handleSignup">
        <div class="form-group">
          <label for="username" class="block text-sm font-medium text-gray-700"
            >Username</label
          >
          <input
            type="text"
            id="username"
            v-model="formData.username"
            placeholder="Enter your username"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
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
          Sign Up
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
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async handleSignup() {
      try {
        const newUser = {
          id: Date.now(),
          username: this.formData.username,
          email: this.formData.email,
          password: this.formData.password,
        };
        await axios.post("http://localhost:5000/users", newUser);
        alert("Signup successful!");
        this.$router.push("/signin");
      } catch (error) {
        console.error("Error during signup:", error);
        alert("Failed to signup!");
      }
    },
  },
};
</script>
