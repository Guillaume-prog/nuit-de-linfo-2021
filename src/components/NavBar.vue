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
  </header>
</template>

<script>
export default {
  data() {
    return {
      themeID: 0,
      themes: ['dark', 'light', 'pirate'],
      icons: ['sun', 'anchor', 'moon']
    }
  },

  created() {
    this.setTheme()
  },

  methods: {
    setTheme() {
      const t = this.themes[this.themeID]
      document.documentElement.classList.remove(...this.themes)
      document.documentElement.classList.add(t)
    },

    changeTheme() {
      this.themeID = (this.themeID + 1) % this.themes.length
      console.log(this.themeID)
      this.setTheme()
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

</style>