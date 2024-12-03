<template>
  <nav class="bg-gray-800 text-white">
    <div class="container mx-auto flex items-center justify-between p-4">
      <!-- Logo -->
      <router-link to="/admin" class="text-2xl font-bold text-white">
        Admin Panel
      </router-link>

      <!-- Navigation Links -->
      <ul class="flex space-x-4">
        <li>
          <router-link
            to="/admin"
            class="hover:text-blue-400"
            active-class="text-blue-500 font-semibold"
          >
            Dashboard
          </router-link>
        </li>
        <li>
          <router-link
            to="/admin/list"
            class="hover:text-blue-400"
            active-class="text-blue-500 font-semibold"
          >
            Posts
          </router-link>
        </li>
        <li>
          <router-link
            to="/admin/create"
            class="hover:text-blue-400"
            active-class="text-blue-500 font-semibold"
          >
            Add Post
          </router-link>
        </li>
      </ul>

      <!-- Logout -->
      <button
        @click="logout"
        class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      alert("Bạn đã đăng xuất!");
      // Logic xử lý đăng xuất (xóa token, điều hướng về Signin,...)
      this.$router.push("/signin");
    },
  },
};
</script>

<style scoped>
/* Tuỳ chỉnh container */
.container {
  max-width: 1200px;
}
</style>
