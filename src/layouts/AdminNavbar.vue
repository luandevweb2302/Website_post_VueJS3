<template>
  <div class="flex min-h-screen">
    <div class="w-1/4 bg-gray-800 text-white p-6">
      <h2 class="text-2xl font-bold mb-8">Admin Panel</h2>
      <ul>
        <li class="mb-4">
          <router-link
            to="/admin"
            class="block text-white hover:text-blue-400"
            active-class="text-blue-500 font-semibold"
          >
            Dashboard
          </router-link>
        </li>

        <li class="mb-4">
          <router-link
            to="/admin/post"
            class="block text-white hover:text-blue-400"
            active-class="text-blue-500 font-semibold"
          >
            Post
          </router-link>
        </li>

        <li class="mb-4">
          <router-link
            to="/admin/categories"
            class="block text-white hover:text-blue-400"
            active-class="text-blue-500 font-semibold"
          >
            Categories
          </router-link>
        </li>

        <li class="mb-4">
          <router-link
            to="/admin/users"
            class="block text-white hover:text-blue-400"
            active-class="text-blue-500 font-semibold"
          >
            Users
          </router-link>
        </li>
      </ul>
      <button
        @click="logout"
        class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mt-8 w-full"
      >
        Logout
      </button>
    </div>

    <div class="w-3/4 bg-gray-100 p-6">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      alert("Bạn đã đăng xuất!");
      this.$router.push("/signin");
    },
  },
};
</script>

<style scoped>
/* Optional styling */
.container {
  max-width: 1200px;
}
</style>
