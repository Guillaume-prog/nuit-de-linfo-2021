<template>
  <div class="user" v-if="showing">
      <div class="icon">
          <feather type="user" v-if="hasIcon" />
          <img :src="user.icon" width="50px" alt="" v-else>
      </div>
      <div class="presentation">
          <h5>{{ fullname }}</h5>
          <span>{{ user.personnesSauvees }}</span>
      </div>
  </div>
</template>

<script>
export default {
    props: [ 'user', 'filter' ],

    created() {
        console.log(this.user)
    },

    computed: {
        hasIcon() {
            return this.user.icon != ""
        },

        fullname() {
            return this.user.first_name + " " + this.user.last_name
        },

        showing() {
            return this.fullname.toLowerCase().startsWith(this.filter.toLowerCase())
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
        background:#555;
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