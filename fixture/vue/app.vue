<script setup lang="ts">
import { defineProps, onMounted } from 'vue';

const props = defineProps<{
  msg: string;
}>();

onMounted(() => {
  console.log('onMounted');
});
</script>

<template>
  <h1>{{ props.msg }}</h1>
</template>

