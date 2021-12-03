<template>
  <div id="searchbar">
    <feather type="search" />
      <input v-model="searchTerm" type="text" :placeholder="tooltip" @keyup="keyUp">
      <span id="type-select" @click="changeType">{{ searchType }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
      searchTypeID: 0,
      searchTypes: ['Personne', 'Bateau'],
      searchTooltips: ['sauveteur / naufragé', 'navire']
    }
  },

  methods: {
    changeType() {
      this.searchTypeID = (this.searchTypeID + 1) % this.searchTypes.length
      this.$emit('update', {term: this.searchTerm, type: this.searchType})
    },

    keyUp() {
      this.$emit('update', {term: this.searchTerm, type: this.searchType})
    }
  },

  computed: {
    tooltip() {
      return "Rechercher un " + this.searchTooltips[this.searchTypeID] + " ..."
    },

    searchType() {
      return this.searchTypes[this.searchTypeID]
    }
  }
}
</script>

<style>

  #searchbar {
    width: 100%;
    box-sizing: border-box;

    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: var(--space-3);

    border-radius: var(--rounding);
    overflow: hidden;

    background-color: var(--header-bg);
    padding: var(--space-3);
  }

  #searchbar > * {
    padding: 0;
    outline: none;

    border: none;
    background-color: transparent;
    color: var(--text);

    font-size: 16pt;
  }

  #type-select {
    width: 125px;
    text-align: right;
    border-left: 2px solid var(--text);
    cursor: pointer;
  }

</style>