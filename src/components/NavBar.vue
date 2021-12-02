<template>
  <header>
      <div id="info">
          <img src="@/assets/logo.png" alt="" id="logo">
          <h2>Find My Sauveteur</h2>
      </div>
      
      <nav>
          <a>Ajouter du contenu</a>
          <div id="theme-select">
              <feather type="sun" />
          </div>
        </nav>
  </header>
</template>

<script>
export default {

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
        font-family: 'Noto Serif', serif;
    }

    /* Right part */
    header nav {
        text-transform: uppercase;
    }

    header nav #theme-select {
        padding-left: var(--space-2);
        border-left: 2px solid var(--text);

        display: grid;
        place-items: center;
    }

</style>