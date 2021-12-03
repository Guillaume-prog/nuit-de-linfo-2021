<template>
  <div class="user" v-if="showing">
      <div class="icon">
          <feather type="user" v-if="hasIcon" />
          <img :src="user.icon" width="50px" alt="" v-else>
      </div>
      <div class="presentation">
          <h5>{{ user.name }}</h5>
          <span>{{ achievements }}</span>
      </div>
  </div>
</template>

<script>
export default {
    props: [ 'user', 'filter' ],

    computed: {
        hasIcon() {
            return this.user.icon != ""
        },

        achievements() {
            return `${this.user.stats.equipages} équipages et ${this.user.stats.personnes} personnes sauvées`
        },

        showing() {
            return this.user.name.toLowerCase().startsWith(this.filter.toLowerCase())
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
        background: var(--user-icon);
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