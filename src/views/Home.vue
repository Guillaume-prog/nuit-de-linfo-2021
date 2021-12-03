<template>
  <div id="home">
    <search-bar @update="updateSearch"></search-bar>

    <div id="list-people">
      <user v-for="user of users" :key="user.personnesSauvees" :user="user" :filter="searchTerm" />
    </div>

    <div v-if="easterEggFound">
      <h1>You found an easter egg</h1>
    </div>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import userData from '../assets/data.json'
import User from '../components/User.vue'

export default {
  name: 'Home',
  components: {
    SearchBar,
    User
  },

  data() {
    return {
      easterEggFound: false,
      users: userData,
      searchTerm: ""
    }
  },

  methods: {
    updateSearch(e) {
      this.searchTerm = e.term
      this.easterEggFound = (e.term == "pirate" && e.type == "Bateau")
    }
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
    grid-template-rows: auto 1fr;
    overflow: hidden;
  }

  #home > div {
    width: 100%;
  }

  #list-people {
    overflow: auto;

    display: flex;
    flex-direction: column;

    gap: var(--space-2);
    margin-top: var(--space-4);
  }
</style>