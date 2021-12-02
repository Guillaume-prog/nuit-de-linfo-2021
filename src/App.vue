<template>
  <router-view></router-view>
</template>

<script>
export default {

  created() {
    document.documentElement.classList.add("dark");
  }
}
</script>



<style>
@import "./assets/style.css";
</style>
