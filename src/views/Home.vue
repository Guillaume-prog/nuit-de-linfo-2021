<template>
  <div id="home">
    <search-bar></search-bar>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'

export default {
  name: 'Home',
  components: {
    SearchBar
  }
}
</script>

<style>
  #home {
    width: 95%;
    max-width: 800px;
    margin: 0 auto;

    padding: 20px;

    display: grid;
    place-items: center;
  }
</style>