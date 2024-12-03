<template>
  <div>
    <AdminNavbar />
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Chào mừng bạn đến với trang quản trị!</p>
    </div>
  </div>
</template>

<script>
import AdminNavbar from "@/layouts/AdminNavbar.vue";

export default {
  components: {
    AdminNavbar,
  },
};
</script>
