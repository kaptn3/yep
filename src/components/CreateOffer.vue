<template>
  <form
    class="form"
    @submit="submitForm"
  >
    <h2 class="title is-3">
      Сформировать предложение
    </h2>
    <b-field label="Краткое описание">
      <b-input
        v-model="short_desc"
        required
      />
    </b-field>
    <b-field label="Описание">
      <b-input
        v-model="text"
        maxlength="200"
        type="textarea"
        required
      />
    </b-field>
    <div class="block">
      <b-radio
        v-for="item in radio"
        :key="item.value"
        v-model="offer_type"
        :native-value="item.value"
        name="type"
        required
      >
        {{ item.name }}
      </b-radio>
    </div>
    <button class="button is-primary is-fullwidth">
      Сформировать предложение
    </button>
  </form>
</template>

<script>
  export default {
    name: 'CreateOffer',
    props: {
      id: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        radio: [
          {
            value: 0,
            name: 'Подарок'
          },
          {
            value: 1,
            name: 'Скидка'
          }
        ],
        offer_type: 0,
        text: '',
        short_desc: ''
      };
    },
    methods: {
      submitForm(e) {
        e.preventDefault();
        console.log(this.id, this.offer_type, this.text, this.short_desc);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .form {
    padding: 20px;
    background-color: #fff;
  }
</style>
