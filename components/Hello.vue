<template>
  <div class="hello">
    <h1>You are viewing: {{ page }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: ['page']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
