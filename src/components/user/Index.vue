<template>
  <div>
    <h1>Start user page from here!</h1>
    <h1>component chính chứa các component con</h1>
    <ul class="list-group">
      <router-link
        tag="li"
        to="user/01"
        class="list-group-items"
        style="cursor:pointer"
      >User 01</router-link>
      <router-link
        tag="li"
        to="user/02"
        class="list-group-items"
        style="cursor:pointer"
      >User 02</router-link>
      <router-link
        tag="li"
        to="user/03"
        class="list-group-items"
        style="cursor:pointer"
      >User 03</router-link>
      <router-link
        tag="li"
        to="user/04"
        class="list-group-items"
        style="cursor:pointer"
      >User 04</router-link>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>