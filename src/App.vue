<template>
  <div id="main">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  },

  created() {
    setTimeout(() => document.documentElement.classList.add("transition"), 1000)
  }
}
</script>



<style>
@import "./assets/style.css";

#main {
    height: 100%;
    display: grid;
    grid-auto-rows: auto 1fr;
  }

</style>
