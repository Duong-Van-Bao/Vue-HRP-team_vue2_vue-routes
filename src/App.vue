<template>
  <div>
    <router-view name="page-header" />
    <div class="container">
      <transition name="slide">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  // components: {
  //   PageHeader
  // }
}
</script>

<style>
.slide-leave-active {
  transition: opacity 1s ease;
  opacity: 0;
  animation: slide-out 1s ease-out forwards;
}
.slide-leave {
  opacity: 1;
  transform: translateX(0);
}
@keyframes slide-out {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateY(30px);
  }
}
</style>
