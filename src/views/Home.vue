<template>
  <div id="home">
    <nav-bar></nav-bar>
    <div id="main">
      <search-bar></search-bar>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import SearchBar from '../components/SearchBar.vue'

export default {
  name: 'Home',
  components: {
    NavBar, SearchBar
  }
}
</script>

<style>
  #home {
    height: 100%;
    display: grid;
    grid-auto-rows: auto 1fr;
  }

  #main {
    display: grid;
    place-items: center;
  }
</style>