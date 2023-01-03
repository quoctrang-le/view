<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup>
import { toRefs, defineProps } from "vue";

const props = defineProps({
  msg: String,
});

const { msg } = toRefs(props);
</script>