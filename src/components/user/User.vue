<template>
  <div class="mt-3">
    <h1 class="text-center">component user</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fugiat dignissimos, cupiditate fuga quidem nostrum dolores necessitatibus, incidunt doloribus fugit reprehenderit adipisci vitae inventore reiciendis eligendi nobis consequuntur dolorum quibusdam.
    </p>
    <hr>
    <button
      class="btn btn-primary btn-block"
      style="width:100%"
      @click="backHome"
    > Back to home</button>
    <hr>
    <router-view />
    <!-- <button
      style="margin-left:10px"
      class="btn btn-warning"
      @click="goDetails"
    >Go to Admin Profile</button>
    <button
      style="margin-left:10px"
      class="btn btn-success"
      @click="goUserDetails"
    >Go to User Profile</button> -->
  </div>
</template>

<script>
export default {
  methods: {
    backHome () {
      // this.$router.push('/')
      // this.$router.push({path:'/'})
      this.$router.push({ name: 'homepage' })
    },
    // goDetails () {
    //   this.$router.push('/user/1')
    // },
    // goUserDetails () {
    //   this.$router.push('/user/100')
    // },
  }
}
</script>

<style lang="scss" scoped>
</style>