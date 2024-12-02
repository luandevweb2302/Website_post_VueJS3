<template>
  <DefaultLayout>
    <div>
      <h1 class="text-2xl font-bold mb-4 text-red-500">Danh sách bài viết </h1>
      <!-- Nội dung của HomePage -->
      <div
        v-if="posts.length"
        class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-3 gap-4"
      >
        <div
          v-for="post in posts"
          :key="post.id"
          class="p-4 border rounded-lg shadow-md"
        >
          <h2 class="text-lg font-semibold mb-2">{{ post.title }}</h2>
          <p class="text-red-500 mb-2">Tác giả: {{ post.author }}</p>
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
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";

export default {
  name: "HomePage",
  components: {
    DefaultLayout,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Bài viết 1",
          author: "Tác giả A",
          category: "Danh mục X",
          content: "Nội dung bài viết...",
        },
        // Thêm bài viết khác...
      ],
    };
  },
};
</script>
