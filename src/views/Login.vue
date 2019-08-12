<template>
  <div class="level-item login-page">
    <section class="columns login-page__section">
      <form class="column is-half is-offset-one-quarter">
        <b-field
          label="Логин"
          horizontal
        >
          <b-input
            name="login"
            placeholder="Логин"
            required
          />
        </b-field>
        <b-field
          label="Пароль"
          :message="error"
          :type="{ 'is-danger': error }"
          horizontal
        >
          <b-input
            type="password"
            name="password"
            placeholder="Пароль"
            required
          />
        </b-field>
        <button class="button is-primary is-fullwidth">
          Войти
        </button>
      </form>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        error: ''
      };
    }
  };
</script>

<style lang="scss" scoped>
  .login-page {
    min-height: 100vh;

    &__section {
      flex-grow: 1;
    }
  }
</style>
