<template>
  <div class="offers">
    <b-table
      :data="body"
      :columns="head"
      :mobile-cards="true"
      :row-class="(row, index) => colorTr(row.accept, row.canceled)"
      :loading="isLoading"
      class="offers__table"
    />
  </div>
</template>

<script>
  import moment from 'moment';
  import axios from 'axios';

  export default {
    name: 'Offers',
    data() {
      return {
        head: [
          {
            field: 'user_phone',
            label: 'Телефон'
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
            field: 'user_name',
            label: 'Имя'
          },
          {
            field: 'wish',
            label: 'Пожелание'
          },
          {
            field: 'wish_date',
            label: 'Желаемая дата'
          },
          {
            field: 'accept',
            label: 'Принято'
          },
          {
            field: 'type',
            label: 'Тип предложения'
          },
          {
            field: 'short_desc',
            label: 'Краткое описание'
          },
          {
            field: 'sent_date',
            label: 'Дата отправки'
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
          const body = res.data.offers;
          for (let i = 0; i < body.length; i++) {
            body[i].user_sex = body[i].user_sex === 'M' ? 'Мужской' : 'Женский';
            body[i].user_date_of_birth = moment(new Date(body[i].user_date_of_birth)).format('DD.MM.YYYY');
            body[i].wish_date = moment(new Date(body[i].wish_date)).format('DD.MM.YYYY');
            body[i].sent_date = moment(new Date(body[i].sent_date)).format('HH:mm, DD.MM.YYYY');
            body[i].accept = body[i].accept ? '✔' : '';
            body[i].type = body[i].type === 0 ? 'Подарок' : 'Скидка';
          }
          this.body = body;
          this.isLoading = false;
        });
    },
    methods: {
      colorTr(accept, canceled) {
        let color = '';
        if (accept && !canceled) {
          color = 'green';
        } else if (canceled) {
          color = 'red';
        }
        return color;
      }
    }
  };
</script>

<style lang="scss">
  .offers {
    padding: 20px 0;

    .green {
      background-color: #acecbd;
    }

    .red {
      background-color: #f3a1bb;
    }

    &__table {
      th {
        &:nth-child(3) {
          min-width: 146px;
        }

        &:nth-child(5) {
          min-width: 170px;
        }

        &:nth-child(6) {
          min-width: 150px;
        }

        &:nth-child(8) {
          min-width: 165px;
        }

        &:nth-child(9) {
          min-width: 170px;
        }
      }
    }
  }

  @media screen and (min-width: 1023px) {
    .offers .table-wrapper {
      overflow-x: auto;
    }
  }
</style>
