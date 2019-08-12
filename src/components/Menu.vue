<template>
  <b-navbar type="is-primary">
    <template slot="brand">
      <b-navbar-item
        tag="span"
      >
        Yep!
      </b-navbar-item>
    </template>
    <template slot="start">
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

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-light">
            Выйти
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style>
  .router-link-active {
    background-color: #6943d0;
    font-weight: 500;
  }
</style>
