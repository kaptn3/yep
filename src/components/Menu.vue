<template>
  <b-navbar type="is-primary">
    <template slot="brand">
      <b-navbar-item
        tag="span"
      >
        Yep!
      </b-navbar-item>
    </template>
    <template
      v-if="$store.state.token"
      slot="start"
    >
      <b-navbar-item
        tag="router-link"
        to="bids"
      >
        Заявки
      </b-navbar-item>
      <b-navbar-item
        tag="router-link"
        to="offers"
      >
        Предложения
      </b-navbar-item>
    </template>

    <template
      v-if="$store.state.token"
      slot="end"
    >
      <b-navbar-item tag="div">
        <div class="buttons">
          <button
            class="button is-light"
            @click="logout"
          >
            Выйти
          </button>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
  export default {
    name: 'Menu',
    methods: {
      logout() {
        this.$store.commit('logout');
        this.$router.push('/');
      }
    }
  };
</script>


<style>
  .router-link-active {
    background-color: #6943d0;
    font-weight: 500;
  }

  @media screen and (max-width: 1023px) {
    .navbar-menu {
      background-color: #7957d5;
    }
  }
</style>
