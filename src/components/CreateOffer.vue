<template>
  <div class="create-offer">
    <b-message
      v-if="status === 'ok'"
      type="is-success"
    >
      Готово
    </b-message>
    <b-message
      v-if="status === 'error'"
      type="is-warning"
    >
      Произошла ошибка
    </b-message>
    <form
      v-if="status === ''"
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
  </div>
</template>

<script>
  import axios from 'axios';

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
        short_desc: '',
        status: ''
      };
    },
    methods: {
      submitForm(e) {
        e.preventDefault();
        const config = {
          headers: {
            'Authorization': `Token ${this.$store.state.token}`,
            'Content-Type': 'application/json'
          }
        };
        const url = `${process.env.VUE_APP_API}managerBids/`;
        const body = new FormData();
        body.set('id', this.id);
        body.set('offer_type', this.offer_type);
        body.set('text', this.text);
        body.set('short_desc', this.short_desc);

        axios.post(url, body, config)
          .then(() => {
            this.status = 'ok';
          })
          .catch(() => {
            this.status = 'error';
          });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .create-offer {
    padding: 20px;
    background-color: #fff;
  }
</style>
