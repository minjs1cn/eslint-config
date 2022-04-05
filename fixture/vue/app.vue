<script setup lang="ts">
const props = defineProps<{
  msg: string;
}>()
</script>

<template>
<h1>{{props.msg}}</h1>
</template>

