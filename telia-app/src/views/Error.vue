<template>
  <div>
    <h1>Ups... something went wrong</h1>
    <router-link :to="{ path: '/phones' }">Back to Brands</router-link>
  </div>
</template>
<script>
export default {
  name: 'Error'
}
</script>
