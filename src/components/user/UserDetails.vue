<template>
  <div>
    <h1>component user detalt</h1>
    <p>ID User:{{id}}</p>
    <!-- <router-link
      tag="button"
      class="btn btn-block btn-warning"
      :to="'/user/' + id + '/edit'"
      style="width:100%"
    >
      Back to Edit
    </router-link> -->
    <!-- <router-link
      tag="button"
      class="btn btn-block btn-warning"
      :to="{name:'useredit',params:{id:id},query:{locate: 'vi',browser:'chorme'}}"
      style="width:100%"
    >
      Back to Edit
    </router-link> -->
    <router-link
      tag="button"
      class="btn btn-block btn-warning"
      :to="link"
      style="width:100%"
    >
      Back to Edit
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      link: {
        name: 'useredit',
        params: {
          id: this.$route.params.id
        },
        query: {
          locate: 'vi',
          browser: 'chorme'
        },
        hash: '#react'
      }
    }
  },
  watch: {
    '$route' (to, from) {
      console.log('sự thay đổi trước', from);
      console.log('sự thay đổi sau', to);
      this.id = to.params.id
    }
  },
  // trước khi router xuất hiện thì chúng ta sẽ làm một cái gì đó 
  beforeRouteEnter (to, from, next) {
    // eslint-disable-next-line no-constant-condition
    if (true) { // nếu đúng thì chúng ta cho next() qua 
      next()
    } else { // nếu sai thì chúng ta cho false  
      next(false)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>