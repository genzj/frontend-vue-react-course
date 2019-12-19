<template>
  <div class="home">
    <h1>This is a user page</h1>
    <h2>Hello {{ $route.params.userID }}!</h2>
  </div>
</template>

<script>
export default {
  name: 'user'
}
</script>
