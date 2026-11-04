<script setup lang="ts">
const email = ref(''), password = ref('')
async function come() { await $fetch('/api/signup', { method: 'POST', body: { email: email.value, password: password.value } }) }
</script>

<template>
  <main class="page">
    <p class="honey">Let's get you in.</p>
    <h1>Make your space</h1>
    <input v-model="email" placeholder="Your email">
    <input v-model="password" type="password" placeholder="A password">
    <button class="go" @click="come">Come in</button>
  </main>
</template>
