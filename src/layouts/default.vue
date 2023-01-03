<template>
  <div class="flex">
    <aside>
      <div class="flex justify-start flex-col bg-gray-100 w-60 h-screen">
        <RouterLink
          class="px-5 py-2 hover:bg-gray-200 cursor-pointer duration-300 active"
          to="/"
        >Dashboard</RouterLink>
        <RouterLink
          class="px-5 py-2 hover:bg-gray-200 cursor-pointer duration-300"
          to="/users"
        >Users</RouterLink>
        <RouterLink
          class="px-5 py-2 hover:bg-gray-200 cursor-pointer duration-300"
          to="/products"
        >Products</RouterLink>
      </div>
    </aside>
    <main class="w-[calc(100vw-15rem)] p-5">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
</script>