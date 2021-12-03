<template>
  <div class="user" v-if="showing">
      <div class="icon">
          <feather type="anchor" v-if="hasIcon" />
          <img :src="bato.icon" width="50px" alt="" v-else>
      </div>
      <div class="presentation">
          <h5>{{ bato.name }}</h5>
          <span>{{ capitaine }}</span>
      </div>
  </div>
</template>

<script>
export default {
    props: [ 'bato', 'filter' ],

    computed: {
        hasIcon() {
            return this.bato.icon != ""
        },

        capitaine() {
            return (this.bato.stats.capitaine == "NONE") ? "Pas de capitaine" : `Capitaine: ${this.bato.stats.capitaine}`
        },

        showing() {
            return this.bato.name.toLowerCase().startsWith(this.filter.toLowerCase())
        }
    }
}
</script>

<style>

    .user {
        background-color: var(--header-bg);
        padding: var(--space-2);
        border-radius: var(--rounding);

        display: flex;
        align-items: center;
        gap: var(--space-2);
    }

    .user .icon {
        background:var(--user-icon);
        border-radius: var(--rounding);
        width: 100px;
        height: 100px;

        display: grid;
        place-items: center;
    }

    .user .icon > * {
        font-size: 64pt;
    }

    .user .presentation h5 {
        margin: 0 0 var(--space-1);
    }

</style>