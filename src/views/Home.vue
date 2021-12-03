<template>
  <div id="home">
    <search-bar @update="updateSearch"></search-bar>

    <div v-if="easterEggFound">
      <center>
        <h1>Vous avez trouvé l'easter egg</h1>
        <p>Voulez-vous jouer à un jeu ?</p>
        <button id="big-btn" @click="openFullScreen">Jouer</button>
      </center>
      
      <div id="popout" v-if="showPopout" @click="closeFullScreen">
        <iframe src="goty/goty.html" width="960px" height="960px" />
      </div>
    </div>

    <div class="item-list" id="list-people" v-else-if="selectedMode == 'Personne'">
      <user v-for="user of users.sort((a,b) => b.stats.personnes - a.stats.personnes)" :key="user.x" :user="user" :filter="searchTerm" />
    </div>

    <div class="item-list" id="list-boats" v-else-if="selectedMode == 'Bateau'">
      <bato v-for="bato of batos.sort((a,b) => a.name.localeCompare(b.name))" :key="bato.x" :bato="bato" :filter="searchTerm" />
    </div>
    
    
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import userData from '../assets/data/user.json'
import batoData from '../assets/data/bato.json'
import User from '../components/User.vue'
import Bato from '../components/Bato.vue'

export default {
  name: 'Home',
  components: {
    SearchBar,
    User,
    Bato
  },

  data() {
    return {
      easterEggFound: false,
      users: userData,
      batos: batoData,
      searchTerm: "",
      showPopout: false,
      selectedMode: "Personne"
    }
  },

  methods: {
    updateSearch(e) {
      this.searchTerm = e.term
      this.selectedMode = e.type
      this.easterEggFound = (e.term.startsWith("pirate") && e.type == "Personne")
    },

    openFullScreen() {
      this.showPopout = true
      const elem = document.documentElement
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
    },

    closeFullScreen() {
      this.showPopout = false
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
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

  .item-list {
    overflow: auto;

    display: flex;
    flex-direction: column;

    gap: var(--space-2);
    margin-top: var(--space-4);
  }

  #big-btn {
    background: var(--header-bg);
    color: var(--text);

    padding: var(--space-3) calc(var(--space-4)*2);
    border: none;
    outline: none;
    border-radius: var(--rounding);

    font-size: 16pt;
    cursor: pointer;
    text-transform: uppercase;
  }

  #popout {
    position: fixed;
    top: 0; bottom: 0;
    left: 0; right: 0;
    background-color: #00000080;
    display: grid;
    place-items: center;
  }
</style>