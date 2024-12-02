<template></template>

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
