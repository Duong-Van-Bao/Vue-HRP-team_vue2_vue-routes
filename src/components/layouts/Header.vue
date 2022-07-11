<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a
        class="navbar-brand"
        href="#"
      >Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link
            tag="li"
            class="nav-item"
            to="/"
            active-class="active"
            exact
          ><a class="nav-link">Home</a></router-link>
          <router-link
            tag="li"
            class="nav-item"
            to="/user"
            active-class="active"
          >
            <a class="nav-link">User</a>
          </router-link>
          <!-- <router-link
            tag="li"
            class="nav-item"
            to="/user/1"
            active-class="active"
          >
            <a class="nav-link">User</a>
          </router-link> -->
          <!-- <router-link
            tag="li"
            class="nav-item"
            to="/user/10"
            active-class="active"
          >
            <a class="nav-link">Admin</a>
          </router-link> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>