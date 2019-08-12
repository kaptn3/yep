<template>
  <div class="offers">
    <h1 class="title is-2">
      Отправленные предложения
    </h1>
    <b-table
      :data="body"
      :columns="head"
      :mobile-cards="true"
      :row-class="(row, index) => this.colorTr(row.accept, row.canceled)"
      class="offers__table"
    />
  </div>
</template>

<script>
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
            label: 'Предложение принято'
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
        body: [
          {
            'user_phone': '-',
            'user_sex': 'M',
            'user_date_of_birth': '1993-09-19',
            'user_name': 'Максим',
            'wish_date': '2019-08-19',
            'wish': 'Тарм пам пам',
            'accept': false,
            'canceled': false,
            'type': 0,
            'short_desc': 'КРатко',
            'sent_date': '2019-08-10T16:00:45.761702Z'
          },
          {
            'user_phone': '-',
            'user_sex': 'M',
            'user_date_of_birth': '1993-09-19',
            'user_name': 'Максим',
            'wish_date': '2019-08-19',
            'wish': 'Тарм пам пам',
            'accept': false,
            'canceled': true,
            'type': 0,
            'short_desc': 'КРатко',
            'sent_date': '2019-08-10T16:00:45.761702Z'
          },
          {
            'user_phone': '-',
            'user_sex': 'M',
            'user_date_of_birth': '1993-09-19',
            'user_name': 'Максим',
            'wish_date': '2019-08-19',
            'wish': 'Тарм пам пам',
            'accept': true,
            'canceled': false,
            'type': 0,
            'short_desc': 'КРатко',
            'sent_date': '2019-08-10T16:00:45.761702Z'
          },
          {
            'user_phone': '-',
            'user_sex': 'M',
            'user_date_of_birth': '1993-09-19',
            'user_name': 'Максим',
            'wish_date': '2019-08-19',
            'wish': 'Тарм пам пам',
            'accept': false,
            'canceled': false,
            'type': 0,
            'short_desc': 'КРатко',
            'sent_date': '2019-08-10T16:00:45.761702Z'
          }
        ]
      };
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

        &:nth-child(7) {
          min-width: 205px;
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
