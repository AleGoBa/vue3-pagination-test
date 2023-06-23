<script setup>
defineProps(['id', 'title', 'body'])
</script>

<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">Post No.{{id}}</h6>
      <p class="card-text">{{ body}}</p>
    </div>
  </div>
</template>
