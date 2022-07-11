<template>
  <div>
    <h1>components User Edit</h1>
    <h1>cách lấy query trên url:</h1>
    <ul>
      <li>{{$route.query.locate}}</li>
      <li>{{$route.query.browser}}</li>
    </ul>
    <hr>
    <button
      style="width:100%"
      class="btn btn-block btn-danger"
      @click="show"
    >Something</button>
    <div style="height:700px"></div>
    <h3 id="react">Chạy Xuống document của reactJS</h3>
    <div style="height:1700px"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: false
    }
  },
  methods: {
    show () {
      this.status = true;
      alert('hello');
    }
  },
  // hàm này được sử dụng khi route trước khi nó được rời bỏ và một route khác sắp được sử dụng 
  // hàm này được sử dụng trong trường hợp xem người dùng có rời bỏ trang này không hay người ta nhầm  
  beforeRouteLeave (to, from, next) {
    if (this.status) {
      next()
    } else {
      if (confirm('Are u sure? Any data will not save!!!')) {
        next()
      } else {
        next(false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>