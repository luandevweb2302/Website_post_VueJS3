<template>
  <DefaultLayout>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Danh sách bài viết</h1>
      <div v-if="loading" class="text-center text-gray-500">Đang tải...</div>
      <div v-if="error" class="text-center text-red-500">{{ error }}</div>

      <div
        v-if="posts.length"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <div
          v-for="post in posts"
          :key="post.id"
          class="p-4 border rounded-lg shadow-md"
        >
          <h2 class="text-lg font-semibold mb-2">{{ post.title }}</h2>
          <p class="text-gray-600 mb-2">Tác giả: {{ post.author }}</p>
          <p class="text-sm text-gray-500">Danh mục: {{ post.category }}</p>
          <p class="mt-2 text-justify">{{ post.content }}</p>
        </div>
      </div>
      <div v-else class="text-center text-gray-500">
        Không có bài viết nào để hiển thị.
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import axios from "axios";

export default {
  components: {
    DefaultLayout,
  },
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
