<template>
  <div class="home">
    <h1>This is a <b>BETTER</b> user page</h1>
    <h2>Hello {{ userID }}!</h2>
  </div>
</template>

<script>
export default {
  props: ['userID',],
  name: 'better-user'
}
</script>
