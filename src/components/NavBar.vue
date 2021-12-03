<template>
  <header>
      <div id="info">
          <img src="@/assets/logo.png" alt="" id="logo">
          <h2>Find My Sauveteur</h2>
      </div>
      
      <nav>
          <router-link to="/">Accueil</router-link>
          <router-link to="/wiki">Nouveau contenu</router-link>
          <div id="theme-select">
              <feather :type="icon" @click="changeTheme" />
          </div>
        </nav>

        <div id="hint-text" v-if="themeID == 2">A la recherche de pirates</div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      themeID: 0,
      themes: ['dark', 'light', 'pirate'],
      icons: ['sun', 'anchor', 'moon'],
      audio: null
    }
  },

  created() {
    if(!this.$cookies.isKey('ups-theme'))
      this.$cookies.set('ups-theme', '0')
    this.themeID = Number(this.$cookies.get('ups-theme'))

    this.setTheme()
    //this.audio = new Audio("../assets/yarr.mp3")
    //this.audio.play()
  },

  methods: {
    setTheme() {
      const t = this.themes[this.themeID]
      document.documentElement.classList.remove(...this.themes)
      document.documentElement.classList.add(t)
      this.$cookies.set("ups-theme", ''+this.themeID)
    },

    changeTheme() {
      this.themeID = (this.themeID + 1) % this.themes.length
      this.setTheme()

      //if(this.themeID == 2) this.audio.play()
      //else this.audio.pause()
    }
  },

  computed: {
      icon() {
          return this.icons[this.themeID]
      }
  }
}
</script>

<style scoped>
    header {
        background-color: var(--header-bg);
        padding: var(--space-3) var(--space-4);

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    header #info, header nav {
        display: flex;
        align-items: center;
        gap: var(--space-2);
    }

    /* Left part */

    header #logo {
        width: 48px;
    }

    header #info h2 {
        margin: 0;
        font-family: 'Montserrat', sans-serif;
    }

    /* Right part */
    header nav a {
        color: var(--text);
        text-decoration: none;
    }

    header nav #theme-select {
        padding-left: var(--space-2);
        border-left: 2px solid var(--text);

        display: grid;
        place-items: center;
    }

    #hint-text {
      position: fixed;
      bottom: var(--space-2);
      left: var(--space-2);
    }

</style>