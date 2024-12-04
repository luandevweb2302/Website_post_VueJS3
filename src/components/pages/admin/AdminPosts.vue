<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Manage Posts</h1>
    <div v-if="loading" class="text-center text-gray-500">Đang tải...</div>
    <div v-if="error" class="text-center text-red-500">{{ error }}</div>

    <div v-if="posts.length" class="space-y-4">
      <div
        v-for="post in posts"
        :key="post.id"
        class="p-4 border rounded-lg shadow-md"
      >
        <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
        <p class="text-gray-600 mb-2">Tác giả: {{ post.author }}</p>
        <p class="text-sm text-gray-500">Danh mục: {{ post.category }}</p>
        <p class="mt-2 text-justify">{{ post.content }}</p>
        <div class="flex justify-end mt-4 space-x-4">
          <router-link
            :to="`/admin/post/edit/${post.id}`"
            class="text-blue-500 hover:text-blue-700"
          >
            Chỉnh sửa
          </router-link>
          <button
            @click="deletePost(post.id)"
            class="text-red-500 hover:text-red-700"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-gray-500">
      Không có bài viết nào để hiển thị.
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchPosts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get("http://localhost:5000/posts");
        this.posts = response.data;
      } catch (err) {
        this.error = "Không thể tải dữ liệu bài viết.";
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style scoped>
/* Optional styling */
</style>
