<template>
  <div class="bids">
    <h1 class="title is-2">
      Заявки
    </h1>
    <a-table
      :head="head"
      :body="body"
      class="table"
    />
  </div>
</template>

<script>
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
        body: [
          {
            'bid_id': 1,
            'user_sex': 'M',
            'user_date_of_birth': '1993-09-19',
            'user_name': 'Максим',
            'wish_date': '2019-08-19',
            'create_date': '2019-08-10T15:59:50.939105Z',
            'wish': 'Тарм пам пам'
          },
          {
            'bid_id': 3,
            'user_sex': 'M',
            'user_date_of_birth': '1993-09-19',
            'user_name': 'Максим',
            'wish_date': '2019-08-19',
            'create_date': '2019-08-10T15:59:50.939105Z',
            'wish': 'Тарм пам пам'
          }
        ]
      };
    }
  };
</script>

<style>
  .table tr {
    cursor: pointer;
  }
</style>
