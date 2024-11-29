<template>
  <header class="bg-blue-600 text-white py-4">
    <div class="container mx-auto flex justify-between items-center">
      <a href="#" class="text-xl font-bold">My Blog</a>
      <ul class="flex space-x-4">
        <li><a href="/" class="hover:underline">Home</a></li>
        <li><a href="/about" class="hover:underline">About</a></li>
        <li><a href="/categories" class="hover:underline">Categories</a></li>
        <li><a href="/contact" class="hover:underline">Contact</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
