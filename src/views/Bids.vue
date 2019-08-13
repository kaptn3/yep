<template>
  <div class="bids">
    <a-table
      :head="head"
      :body="body"
      :loading="isLoading"
      class="table"
    />
  </div>
</template>

<script>
  import moment from 'moment';
  import axios from 'axios';
  import ATable from '@/components/Table.vue';

  export default {
    name: 'Bids',
    components: { ATable },
    data() {
      return {
        head: [
          {
            field: 'user_name',
            label: 'Имя'
          },
          {
            field: 'user_sex',
            label: 'Пол'
          },
          {
            field: 'user_date_of_birth',
            label: 'Дата рождения'
          },
          {
            field: 'wish_date',
            label: 'Желаемая дата'
          },
          {
            field: 'create_date',
            label: 'Дата создания заявки'
          }
        ],
        body: [],
        isLoading: true
      };
    },
    mounted() {
      const config = {
        headers: {
          'Authorization': `Token ${this.$store.state.token}`
        }
      };
      const url = `${process.env.VUE_APP_API}managerBids/`;
      axios.get(url, config)
        .then((res) => {
          const body = res.data.bids;
          for (let i = 0; i < body.length; i++) {
            body[i].user_sex = body[i].user_sex === 'M' ? 'Мужской' : 'Женский';
            body[i].user_date_of_birth = moment(new Date(body[i].user_date_of_birth)).format('DD.MM.YYYY');
            body[i].wish_date = moment(new Date(body[i].wish_date)).format('DD.MM.YYYY');
            body[i].create_date = moment(new Date(body[i].create_date)).format('HH:mm, DD.MM.YYYY');
          }
          this.body = body;
          this.isLoading = false;
        });
    }
  };
</script>

<style lang="scss">
  .bids {
    padding: 20px 0;

    tr {
      cursor: pointer;
    }
  }
</style>
